import * as yup from 'yup';
import { SchemaOf } from 'yup';

import 'yup-phone';
import { ShipmentFormData } from '@/app/summary/shipmentForm/ShipmentForm.types';

const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const validationSchema: SchemaOf<ShipmentFormData> = yup
  .object({
    name: yup.string().required('Field is required'),
    surname: yup.string().required('Field is required'),
    phone: yup.string().phone('US', true, 'Phone number is invalid').required('Field is required'),
    email: yup.string().email('Email is invalid').required('Field is required'),
    dateOfBirth: yup
      .date()
      .max(new Date(), 'Are you a time traveler? Sorry, we do not support this type of customers')
      .required('Field is required'),
    address: yup.string().required('Field is required'),
    city: yup.string().required('Field is required'),
    state: yup.string().required('Field is required'),
    zipcode: yup.string().matches(zipRegex, 'Zip code is invalid').required('Field is required'),
  })
  .required();
