
import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({

    contactUs: build.mutation<CONTACT.GetContactRes, CONTACT.GetContactReq>({
      query: (contactData) => ({
        url: "/contact_us/",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["contact_us"],
    }),

    proposal: build.mutation<CONTACT.GetProposalRes, CONTACT.GetProposalReq>({
      query: (contactDataRfc) => ({
        url: "/rfc_proposal/",
        method: "POST",
        body: contactDataRfc,
      }),
      invalidatesTags: ["rfc_proposal"],
    }),

     

  }),
});

export const { useContactUsMutation, useProposalMutation} = api;
 