// ANCHOR: React
import * as React from 'react';

// ANCHOR: Kuru Studio Design Import
import { InputAtom } from 'kuru-studio-design';
import { LabelAtom } from 'kuru-studio-design';
import { FormMolecule } from 'kuru-studio-design';

// ANCHOR: Sign In Page
export default () => {
  return (
    <div>
      <FormMolecule>
        <LabelAtom labelFor="email">Email:</LabelAtom>
        <InputAtom type="email" name="email"/>
        <LabelAtom labelFor="password">Password:</LabelAtom>
        <InputAtom type="password" name="password"/>
        <InputAtom type="button" value="hello"/>
      </FormMolecule>
    </div>
  )
}
