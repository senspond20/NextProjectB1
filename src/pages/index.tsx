
import Image from 'next/image'
import React from 'react';
import Layouts from '@components/layouts';
import Link from 'next/link'

export default function Home() {
  return (
      <Layouts>
          
          안녕하세요
          <div>
             <Link href='/test'><a>클릭</a></Link>
          </div>
      </Layouts>
  )
}
