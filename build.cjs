const fs=require('fs');const path=require('path');fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist',{recursive:true});for(const f of ['index.html','main.js','styles.css','supabase-schema.sql','README.md']){const src=path.join('src',f);if(fs.existsSync(src))fs.copyFileSync(src,path.join('dist',f));}
console.log('Build OK: dist generado');
