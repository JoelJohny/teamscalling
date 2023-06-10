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
token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjdhYWY3MGZiLTM2NWMtNDRiYi1iZmQ2LTdhZTU5MTc0ZjdiNV8wMDAwMDAxOS0zOWZkLWQ4YmEtZDA3MS1jOTNhMGQwMGU1ZTciLCJzY3AiOjE3OTIsImNzaSI6IjE2ODYyMTI3MTkiLCJleHAiOjE2ODYyOTkxMTksInJnbiI6ImluIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiN2FhZjcwZmItMzY1Yy00NGJiLWJmZDYtN2FlNTkxNzRmN2I1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImluZGlhIiwiaWF0IjoxNjg2MjEyNzE5fQ.a_b34KC7jVGagcA-rESLJmIqlO4gQwwSkq0L_RDiTEQqDBAei_ne0aZz3MEmJKlAfG7MoFrEOj2MBp93hupSzWw3-sGCe31Pws8f-tHQcH4u2jdVJ6LJISvX8-o_VrZr_e8vfJKi1IEbBBW38C-Yq2shzXfadkXm5HJ01LgIuwKLpsjNzpUJ9qc2t6KZC8aX3Qcq6U6JGWy3wgMDQrjiFXCoxAy96UFWyc4oCaTQcKWHEwZJT3LVRHKwzrARezwpYTzCQyXKQaZdX7kmUUhk6gTQYRiSFt8zg1Y4HW2Q8OG1297r7oh8SThPjyPl35YfVZjfdO8Ym94JgwXZmSA7HA'

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
    this.call = this.callAgent.startCall([{ id: phoneToCall }],
    );
  }

  hangUpCall() {
    this.call.hangUp({ forEveryone: true });
  }
}