import React, { Component } from 'react';
import css from './ContactListItem.module.css';
export class ContactsListItem extends Component {
  render() {
    return (
      <>
        <li className={css.list__item}>
          <span>
            {this.props.contact.name}: {this.props.contact.number}
          </span>
          <button
            type="button"
            onClick={() => {
              this.props.onDeleteButton(this.props.contact.id);
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
