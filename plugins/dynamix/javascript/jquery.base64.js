function base64(r){var e,t,a,c,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=r.length,n=o%3,A="";function d(r){return h.charAt(63&r)}for(a=0,e=o-n;a<e;a+=3)A+=d((c=(r.charCodeAt(a)<<16)+(r.charCodeAt(a+1)<<8)+r.charCodeAt(a+2))>>18)+d(c>>12)+d(c>>6)+d(c);switch(n){case 1:A+=d((t=r.charCodeAt(o-1))>>2),A+=d(t<<4),A+="==";break;case 2:A+=d((t=(r.charCodeAt(o-2)<<8)+r.charCodeAt(o-1))>>10),A+=d(t>>4),A+=d(t<<2),A+="="}return A}