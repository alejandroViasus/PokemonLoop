import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";

function SuccesLogin() {
  const urlHome = "/";
  const router = useRouter();
  return (
    <div>
      <h1> entrenador creado exitosamente !!! </h1>

      <Link href={`${urlHome}`}> go to HOME </Link>

    </div>
  )
}

export default SuccesLogin