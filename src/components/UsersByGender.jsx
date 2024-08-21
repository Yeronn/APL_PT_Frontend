/* eslint-disable react/prop-types */
import { BarChart } from "@tremor/react"
import { useEffect, useState } from "react"

export default function UsersByGender({ dataUsers = [] }) {
    const [usersByGender, setUsersByGender] = useState([])
    
    useEffect(() => {
        const users = dataUsers.reduce((amountByGender, user) => {
            if (user.gender === 'male') {
                amountByGender.male += 1
            } else if (user.gender === 'female') {
                amountByGender.female += 1
            }
            return amountByGender
        }, { male: 0, female: 0})
        setUsersByGender(users)
    },[dataUsers])

    const chartData = [
        {
            genero: 'Hombre',
            cantidad: usersByGender.male
        },
        {
            genero: 'Mujer',
            cantidad: usersByGender.female
        }
    ]

    return(
    <section>
      <h3 className="text-lg font-medium text-tremor-content-strong text-center">
         Usuarios por género
      </h3>
      <BarChart
        className="mt-6"
        data={chartData}
        index="genero"
        categories={['cantidad']}
        colors={['blue']}
        // valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </section>
    )
}