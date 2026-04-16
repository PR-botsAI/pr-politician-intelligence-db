async function checkAdmin(uid){if(uid==='eGjKT3AHFKg1sJcFkJaroYoySJX2')return true;try{return(await getDoc(doc(db,'admins',uid))).exists();}catch(e){console.warn('Admin check:',e);return false;}}
