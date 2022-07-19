import Link from 'next/link';
import React from 'react';

function Index() {
  return (
    <>
    <div><Link href={'http://localhost:3000/propertyId/424'}>Link here</Link></div>
    <div><Link href={'http://localhost:3000/propertyId/237'}>Link here</Link></div>
    </>
  )
}

export default Index