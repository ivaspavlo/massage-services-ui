# User Verification
## documentsPerCountry-v1 + documentUploadSettings-v1 = verificationDocuments-v1
It provides 2 items. A list of general upload settings which apply to all documents
and a list of accepted document types to verify player's data. Each type specifies the number of files required.
```json
{
  "settings": {
    "maxFileSize": 10485760,
    "contentTypes": [
      "application/pdf",
      "image/jpeg",
      "image/gif",
      "image/bmp",
      "image/png"
    ]
  },
  "documentTypes": [
    {
      "documentType": "passport",
      "typeName": "Passport",
      "requiredFilesNumber": 2,
      "message": "Here you can upload a copy of your personal identity document in GIF, JPG, PNG or PDF format. Please upload a maximum of 2 files that do not exceed a total size of 6 MB."
    }
  ]
}
```
## verificationOverview-v1
It provides the verification types that the user needs to fulfil. The ones that are not necessary for a jurisdiction are not present in the list.
Based on the verification type and current status there will be a list of accepted/applicable documents to fulfil the verification request.
```json
{
  "poi" :{
    "verificationStatus": "confirmed | rejected | inProgress | ...",
    "verificationMethods":{
      // "applicableDocumentTypes": ["passport", "personalId", ...],
      "applicableDocuments": {
        "applicableTypes": ["passport", "personalId", ...],
        "uploadedDocuments": [{
          "documentType": "personalIdCard",
          "typeName": "PersonalIdCard",
          "state": "documentProvided",
          "date": "2020-03-31T09:16:32.0862263Z",
          "files": [
            "MyIdCardFront.pdf",
            "MyIdCardBack.pdf"
          ],
          "proofOfPaymentAccount": "",
          /* NEW: Returns the applicable verification type */
          "verificationType": "poi | poa | pop",
        }],
      },
      "applicablePaymentTypes": ["paysera","bankTransfer", ...],
      "applicableSmartIdTypes": ["smartId"]
      ...
    }
  },
  "poa": {
    "verificationStatus": "confirmed | rejected | inProgress | ...",
    "verificationMethods":{
      "applicableDocumentTypes": ["passport", "personalId", ...],
      "applicablePaymentTypes": ["paysera","bankTransfer", ...],
      ...
    }
  },
  "pop": {
    "verificationStatus": "confirmed | rejected | inProgress | ...",
    "accounts": [{
      "accountId": 1,
      "accountName": "accountName",
    }]
  },
  "other": {
    "verificationStatus": "confirmed | rejected | inProgress | ...",
    "verificationMethods":{
      "applicableDocumentTypes": ["passport", "personalId", ...],
      ...
    }
  },
  "pepForm": {
    "verificationStatus": "confirmed | rejected | inProgress | ..."
  }
}
```
## documents-v1 + verificationType attribute
Once the verification status changes we need a way to know which documentType files were used to fulfil a verification request, based on the premise that verificationDocuments-v1 will take over documentsPerCountry-v1 and in verificationOverview-v1 the applicable document types will changed based on the verification status, this could be added to the document-v1 end-point.
```json
{
  "documents": [
    {
      "documentType": "personalIdCard",
      "typeName": "PersonalIdCard",
      "state": "documentProvided",
      "date": "2020-03-31T09:16:32.0862263Z",
      "files": [
        "MyIdCardFront.pdf",
        "MyIdCardBack.pdf"
      ],
      "proofOfPaymentAccount": "",
      /* NEW: Returns the applicable verification type */
      "verificationType": "poi | poa | pop",
    }
  ]
}