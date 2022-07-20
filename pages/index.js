import Link from 'next/link';
import React from 'react';

function Index() {
  return (
    <>
    <div><Link href={'/propertyId/368'}>Link here</Link></div>
    <div><Link href={'/propertyId/237'}>Link here</Link></div>
    </>
  )
}

export default Index