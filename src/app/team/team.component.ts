import { Component, OnInit } from '@angular/core';
import { CallAgent, CallClient } from '@azure/communication-calling';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import * as microsoftTeams from '@microsoft/teams-js';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  //   microsoftTeams.initialize();
  // }
  call: any;
  callAgent!: CallAgent;
  calleePhoneInput:any
token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjdhYWY3MGZiLTM2NWMtNDRiYi1iZmQ2LTdhZTU5MTc0ZjdiNV8wMDAwMDAxOS01M2U3LWE5YWYtMTE2MC1jOTNhMGQwMDk0ODUiLCJzY3AiOjE3OTIsImNzaSI6IjE2ODY2NDc0NzMiLCJleHAiOjE2ODY3MzM4NzMsInJnbiI6ImluIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiN2FhZjcwZmItMzY1Yy00NGJiLWJmZDYtN2FlNTkxNzRmN2I1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImluZGlhIiwiaWF0IjoxNjg2NjQ3NDczfQ.bPq1rNWY2MhohoW7N3B1OVv2iT990dByDuQ1qydD0tMA-s48BiVmwaIoBKMklG-iM_j-JJ6X7lm4nRq-hfuUbjvISMTFtSrpNURt8v1ncD3rQ7DUOwwh4Du1rdcm_Fyd77n2Ecmu3EQyDjm506fi6MwSbgtZWyqOOYb4DwLQ3H11ok4abna2sAyhihV1D6LEX_7ZDoiFyyvCw1xltNfJk2MWdfwM0z-TDE7MorSYwF9bgzCtv30zvGABzrq5XcRWeQYoDTq3Qe73xnthISitx71XI8J0JYNATdP1eFAg_TKgX1Nkqy9I_lHq-Y41CMqlkeALH8h6udA2OtMXN6UGzQ'

  async ngOnInit() {
    const callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential(this.token);
    this.callAgent = await callClient.createCallAgent(tokenCredential);
  }

  makeCall() {
    const phoneToCall = this.calleePhoneInput;
    // this.call = this.callAgent.startCall([{ phoneNumber: phoneToCall }], {
    //   alternateCallerId: { phoneNumber: 'ACS Number' }
    // }
    //this.call = this.callAgent.startCall([{ communicationUserId: '<ACS_USER_ID>' }]
    this.call = this.callAgent.startCall([{ id: phoneToCall }],
    );
  }

  hangUpCall() {
    this.call.hangUp({ forEveryone: true });
  }
}