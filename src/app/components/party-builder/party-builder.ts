import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { PartyRole, Specialization } from '../../interfaces/specialization';
import { WowClass } from '../../interfaces/wow-class';
import { WowClassData } from '../../services/wow-class-data';
import { PartyData } from '../../services/party-data';

@Component({
  selector: 'app-party-builder',
  standalone: false,
  templateUrl: './party-builder.html',
  styleUrl: './party-builder.scss',
})
export class PartyBuilder implements OnInit {

  @Output() formSubmitted = new EventEmitter();
  wowClasses = signal<WowClass[]>([]);
  private wowClassData = inject(WowClassData);
  private partyData = inject(PartyData);

  /*
   * Validar que la party tenga>
   * 1 Tanque, 1 Healer y 3 DPS
   */
  private isInvalidComposition = 
  (control: AbstractControl): ValidationErrors | null => {
    const memberNames = [ 'member1', 'member2', 'member3', 'member4', 'member5'];
    const roles: PartyRole[] = [];

    for (const memberName of memberNames) {
        const className = control.get(`${memberName}.wowClass`)?.value;
        const specializationName = control.get(`${memberName}.specialization`)?.value;

        if (!className || !specializationName) {
          return null;
        }
        const role = this.findRole(
          className,
          specializationName
        );
        if (!role) {
          return {
            invalidSpecialization: true
          };
        }
        roles.push(role);
    }

    const tanks = roles.filter(role => role === 'Tanque').length;
    const healers = roles.filter(role => role === 'Sanador').length;
    const dps = roles.filter(role => role === 'DPS').length;
    if (tanks !== 1 || healers !== 1 || dps !== 3) {
      return {
        invalidComposition: true
      };
    }
    return null;
  };

  partyForm = new FormGroup(
    {
      dungeon: new FormControl('', [Validators.required]),
      member1: this.createMemberGroup(),
      member2: this.createMemberGroup(),
      member3: this.createMemberGroup(),
      member4: this.createMemberGroup(),
      member5: this.createMemberGroup()
    },
    [this.isInvalidComposition]
  );

  ngOnInit(): void {
      this.wowClassData.getClasses().subscribe(classes => {
          this.wowClasses.set(classes);
          this.partyForm.updateValueAndValidity();
        });
  }

  private createMemberGroup(): FormGroup {
      return new FormGroup({
        wowClass: new FormControl(
          '', [Validators.required]
        ),
        specialization: new FormControl(
          {
            value: '',
            disabled: true
          },
          [Validators.required]
        )
      });
  }

  getSpecializations(memberName: string): Specialization[] {
      const className = this.partyForm.get(`${memberName}.wowClass`)?.value;
      const selectedClass = this.wowClasses().find(wowClass => wowClass.name === className);
      return selectedClass?.specializations ?? [];
  }

  onClassChange(memberName: string): void {
      const classControl = this.partyForm.get(`${memberName}.wowClass`);
      const specializationControl = this.partyForm.get(`${memberName}.specialization`);
      specializationControl?.reset('');

      if (classControl?.value) {
        specializationControl?.enable();
      } else {
        specializationControl?.disable();
      }

      this.partyForm.updateValueAndValidity();
  }

  private findRole(
      className: string,
      specializationName: string
    ): PartyRole | null {

      const selectedClass = this.wowClasses().find(wowClass => wowClass.name === className);
      const selectedSpecialization = selectedClass?.specializations.find(specialization => specialization.name === specializationName);
      return selectedSpecialization?.role ?? null;
  }

  onSubmit(): void {
      this.partyForm.markAllAsTouched();
      if (this.partyForm.valid) {
        const party = this.partyForm.getRawValue();

        this.partyData.createParty(party).subscribe(() => { 
            console.log('Party add a MockAPI:', party);
            this.formSubmitted.emit(party);
          });
    }
  }
}