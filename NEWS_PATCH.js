// IMPROVED NEWS SEARCH - Replace loadNews in index.html
// Changes: 10 results, multiple queries, dedup, re-search button, Google News + Web links

async function loadNews(id,name){
  const btn=document.getElementById('news-btn-'+id);
  const res=document.getElementById('news-results-'+id);
  if(!btn||!res)return;
  btn.style.display='none';
  res.innerHTML='<div class="news-loading"><div class="dot-pulse"><span></span><span></span><span></span></div><div style="margin-top:8px">Buscando noticias...</div></div>';
  const queries=['"'+name+'" Puerto Rico', name+' politico Puerto Rico'];
  let allItems=[];const seen=new Set();
  for(const q of queries){
    if(allItems.length>=10)break;
    const rss='https://news.google.com/rss/search?q='+encodeURIComponent(q)+'&hl=es-419&gl=PR&ceid=PR:es-419';
    const proxies=['https://corsproxy.io/?url='+encodeURIComponent(rss),'https://api.allorigins.win/raw?url='+encodeURIComponent(rss)];
    for(const url of proxies){try{const r=await fetch(url);if(r.ok){const xml=await r.text();if(xml&&xml.includes('<item>')){const parser=new DOMParser();const doc=parser.parseFromString(xml,'text/xml');Array.from(doc.querySelectorAll('item')).forEach(it=>{const t=it.querySelector('title')?.textContent||'';if(t&&!seen.has(t)){seen.add(t);allItems.push({title:t,link:it.querySelector('link')?.textContent||'',date:it.querySelector('pubDate')?.textContent||'',source:it.querySelector('source')?.textContent||''});}});break;}}}catch(e){}}
  }
  const gn='https://news.google.com/search?q='+encodeURIComponent('"'+name+'" Puerto Rico')+'&hl=es-419&gl=PR';
  const gw='https://www.google.com/search?q='+encodeURIComponent(name+' Puerto Rico noticias')+'&tbm=nws';
  if(!allItems.length){res.innerHTML='<div class="news-loading">Sin resultados.<div style="margin-top:10px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><a href="'+gn+'" target="_blank" class="contact-link">📰 Google News</a><a href="'+gw+'" target="_blank" class="contact-link">🔎 Google</a></div></div>';btn.style.display='flex';btn.textContent='🔄 Reintentar';return;}
  const items=allItems.slice(0,10);
  res.innerHTML='<div style="font-size:10px;color:var(--muted);margin-bottom:8px">'+items.length+' noticias encontradas</div>'+items.map(n=>{const d=n.date?new Date(n.date).toLocaleDateString('es-PR',{month:'short',day:'numeric',year:'numeric'}):'';return'<a href="'+escapeHtml(n.link)+'" target="_blank" rel="noopener" style="text-decoration:none;color:inherit"><div class="news-item"><div class="news-title">'+escapeHtml(n.title)+'</div><div class="news-meta">'+escapeHtml(n.source)+(d?' · '+d:'')+'</div></div></a>';}).join('')+'<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><a href="'+gn+'" target="_blank" class="contact-link">📰 Más en Google News ↗</a><a href="'+gw+'" target="_blank" class="contact-link">🔎 Buscar en Google ↗</a></div>';
  btn.style.display='flex';btn.innerHTML='🔄 Buscar de nuevo';
}
