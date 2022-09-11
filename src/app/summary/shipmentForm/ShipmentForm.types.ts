export type ShipmentFormData = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  dateOfBirth: Date | null;
  address: string;
  city: string;
  state: string;
  zipcode: string;
};

export type ShipmentFormProps = {
  onValidate: (isValid: boolean) => void;
  onSubmit: (data: ShipmentFormData) => void;
};
