/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      email: true,
      unique: true,
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
      columnType: 'date',
    },
    updatedAt: {
      type: 'string',
      columnType: 'date',
    },
  },
  validationMessages: {
    firstName: {
      required: 'Please fill your first name.',
    },
    lastName: {
      required: 'Please fill your last name.',
    },
    email: {
      required: 'Email is required',
      email: 'Provide valid email address',
      unique: 'Email address is already taken',
    },
    password: {
      required: 'Please fill your password.',
    },
  },
  datastore: 'default',
};
