/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Plans from "../components/Plans"
import fetchApi from "../lib/fetchApi"
import { useRouter } from 'next/router'

export default function Support({}) {
  const router = useRouter()
  const [plans, setPlans] = useState([])
  
  useEffect(() => {
    fetchApi({method: 'get', path: `${process.env.API}/supportplans/`, router, currentPage: router.asPath, auth: false})
    .then(data => setPlans(data))
  }, [])
  
  
  return <Plans supportPlans={plans} />
}