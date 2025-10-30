import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils'; // ldsUtilsからreduceErrorsを読み込み

const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;

    @wire(getContacts)
    contacts;

    // エラーを配列として返す getter
    get errors() {
        return this.contacts.error ? reduceErrors(this.contacts.error) : [];
    }
}
