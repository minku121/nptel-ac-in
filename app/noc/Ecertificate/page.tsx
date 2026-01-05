import { Suspense } from 'react';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

async function CertificateContent({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const q = typeof params.q === 'string' ? params.q : 'NPTEL25HS174S55280008910778882';
  
  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>
       <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <a 
          href={`/content/noc/NOC25/SEM2/Ecertificates/109/noc25-hs174/Course/${q}.pdf`} 
          target="_blank" 
          style={{ color: 'white', backgroundColor: '#3070bf', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          Course Certificate
        </a>
        <br />
      </div>
    </main>
  );
}

export default function Page(props: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CertificateContent searchParams={props.searchParams} />
    </Suspense>
  );
}
