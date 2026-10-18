import {defineConfig} from 'vite';
import handler from './netlify/functions/enquiry.mjs';
function localFunction(server){server.middlewares.use('/.netlify/functions/enquiry',async(req,res)=>{let body='';for await(const chunk of req){body+=chunk;if(body.length>12000){res.statusCode=413;res.end();return}}const response=await handler(new Request('http://127.0.0.1:4173/.netlify/functions/enquiry',{method:req.method,headers:req.headers,...(req.method==='POST'?{body}: {})}));res.statusCode=response.status;response.headers.forEach((v,k)=>res.setHeader(k,v));res.end(await response.text())})}
export default defineConfig({plugins:[{name:'local-netlify-function',configureServer:localFunction,configurePreviewServer:localFunction}]});
