namespace CONTACT {
  type GetContactRes = [
    {
      id: number;
      client_name: string;
      email: string;
      object_us: number;
      message: string;
    }
  ];
  type GetContactReq = {
    client_name: string;
    email: string;
    object_us: number;
    message: string;
  };

  type GetProposalRes = [
    {
      id: number;
      client_name: string;
      email: string;
      object_choices: number;
      message: string;
    }
  ];
  type GetProposalReq = {
    id: number;
    client_name: string;
    email: string;
    object_choices: number;
    message: string;
  };
}
