import {test} from 'node:test';
import assert from 'node:assert/strict';
import handler,{validate} from '../netlify/functions/enquiry.mjs';
const synthetic={name:'SYNTHETIC TEST',company:'DEMO ONLY',email:'synthetic@example.invalid',phone:'07700 900123',postcode:'ME4 4AA',type:'Hand-Cut Roofs',description:'Synthetic test enquiry. No real project or customer.',consent:'yes',website:''};
test('valid synthetic enquiry passes validation',()=>assert.equal(validate(synthetic),null));
test('invalid and abusive input rejected',()=>{for(const data of [{...synthetic,email:'bad'},{...synthetic,postcode:'bad'},{...synthetic,phone:'bad'},{...synthetic,description:'short'},{...synthetic,consent:''},{...synthetic,website:'spam'},{...synthetic,type:'fake'},{...synthetic,description:'x'.repeat(5001)}])assert.ok(validate(data))});
test('disabled form never claims storage',async()=>{delete process.env.DEMO_ENQUIRIES_ENABLED;const res=await handler(new Request('https://demo.example/.netlify/functions/enquiry',{method:'POST',body:JSON.stringify(synthetic)}));assert.equal(res.status,503);assert.equal((await res.json()).id,undefined)});
test('non-POST and foreign origins rejected',async()=>{assert.equal((await handler(new Request('https://demo.example/.netlify/functions/enquiry'))).status,405);process.env.DEMO_ENQUIRIES_ENABLED='true';assert.equal((await handler(new Request('https://demo.example/.netlify/functions/enquiry',{method:'POST',headers:{origin:'https://other.example'}}))).status,403);delete process.env.DEMO_ENQUIRIES_ENABLED});
