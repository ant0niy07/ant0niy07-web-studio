export type ContactConfig={phone:string|null;whatsapp:string|null;telegram:string|null;email:string|null;instagram:string|null};
export const contact:ContactConfig={phone:null,whatsapp:null,telegram:null,email:null,instagram:"https://instagram.com/ant0niy07"};
export const contactHref=(type:keyof ContactConfig,value:string|null,message="")=>{
 if(!value)return null;
 if(type==="phone")return `tel:${value.replace(/\s/g,"")}`;
 if(type==="email")return `mailto:${value}?subject=${encodeURIComponent("Zapytanie o stronę internetową")}&body=${encodeURIComponent(message)}`;
 if(type==="whatsapp")return `https://wa.me/${value.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
 if(type==="telegram")return value.startsWith("http")?value:`https://t.me/${value.replace(/^@/,"")}`;
 return value;
};
