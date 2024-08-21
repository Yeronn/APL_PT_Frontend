/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BarChart } from "@tremor/react"
import { useEffect, useState } from "react"

export default function UsersByInterval({ dataUsers }) {
    const [usersByInterval, setUsersByInterval] = useState()
    useEffect(()=>{
        const intervals = [20, 30, 40, 50, 60, 70, 80]
        const intervalGroups = {}
        intervals.forEach(interval => {
            intervalGroups[interval] = 0
        })
        dataUsers.map((user) => {
            const age = user.dob.age 
            if (age >= intervals[0] && age < intervals[1]) {
                intervalGroups[intervals[0]] += 1
            } else if (age < intervals[2]) {
                intervalGroups[intervals[1]] += 1
            } else if (age < intervals[3]) {
                intervalGroups[intervals[2]] += 1
            } else if (age < intervals[4]) {
                intervalGroups[intervals[3]] += 1
            } else if (age < intervals[5]) {
                intervalGroups[intervals[4]] += 1
            } else if (age < intervals[6]) {
                intervalGroups[intervals[5]] += 1
            }
        })
        const formatData = Object.entries(intervalGroups).map(([grupoEdad, cantidad]) => (
            {
                grupoEdad,
                cantidad
            }
        ))
        setUsersByInterval(formatData)
    }, [dataUsers])
    
    return(
        <section>
            <h3 className="text-lg font-medium text-tremor-content-strong text-center">
                Usuarios por grupo de edad
            </h3>
            <BarChart
                className="mt-6"
                data={usersByInterval}
                index="grupoEdad"
                categories={['cantidad']}
                colors={['blue']}
                yAxisWidth={48}
            />
        </section>
    )
}