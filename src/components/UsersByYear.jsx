/* eslint-disable react/prop-types */
import { LineChart } from "@tremor/react"
import { useEffect, useState } from "react"

export default function UsersByYear({ dataUsers }) {
    const [usersByYear, setUsersByYear] = useState()

    useEffect(() => {
        const users = dataUsers.reduce((amountByYear, user) => {
            let date = user.registered.date
            date = new Date(date)
            const yearRegister = date.getFullYear()
            if (amountByYear[yearRegister]) {
                amountByYear[yearRegister] += 1
              } else {
                amountByYear[yearRegister] = 1
              }
              return amountByYear
        }, {})
        const formatData = Object.entries(users).map(([año, cantidad]) => (
            {
                año,
                cantidad
            }
        ))
        setUsersByYear(formatData)
    },[dataUsers])
    return(
        <section>
            <h3 className="text-lg font-medium text-tremor-content-strong text-center">Usuarios por año</h3>
            {usersByYear && 
            <LineChart
                className="mt-4 h-72 w-80"
                data={usersByYear}
                index="año"
                categories={['cantidad']}
                colors={['blue']}
                yAxisWidth={30}
            />}
        </section>
    )
}