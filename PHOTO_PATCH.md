<!-- PHOTO UI PATCH - Key rendering changes for index.html -->
<!-- 
Changes needed in index.html:

1. CACHE_KEY: change from 'gs_politicians_cache_v3' to 'gs_politicians_cache_v4'
   (forces reload with new photo_url data)

2. politicianFromFrontmatter: add gov_url, email, phone fields:
   Add after photo_url line:
   gov_url:fm.gov_url||'',
   email:fm.email||'',
   phone:fm.phone||''

3. New helper function getPhotoHtml(p, size):
   function getPhotoHtml(p,sz){
     if(p.photo_url&&!p.photo_url.includes('cdn.gobistats')){
       return `<img src="${escapeHtml(p.photo_url)}" style="width:${sz}px;height:${sz}px;border-radius:50%;object-fit:cover;border:2px solid var(--border)" onerror="this.outerHTML='<span style=font-size:${Math.round(sz*0.5)}px>${getEmoji(p)}</span>'">`;
     }
     return `<span style="font-size:${Math.round(sz*0.5)}px">${getEmoji(p)}</span>`;
   }

4. makeCard: replace emoji with photo
   Change: <span style="font-size:22px">${getEmoji(p)}</span>
   To: ${getPhotoHtml(p,36)}

5. renderSearch: replace si-emoji content
   Change: <div class="si-emoji">${getEmoji(p)}</div>
   To: <div class="si-emoji">${getPhotoHtml(p,36)}</div>

6. renderRanking: replace rank-emoji
   Change: <div class="rank-emoji">${getEmoji(p)}</div>
   To: <div class="rank-emoji">${getPhotoHtml(p,38)}</div>

7. renderDetail: replace detail-emoji
   Change: <div class="detail-emoji">${getEmoji(p)}</div>
   To: <div class="detail-emoji">${getPhotoHtml(p,64)}</div>

8. renderDetail: add contact/gov links section after badges
-->
