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
            gender: 'male',
            amount: usersByGender.male
        },
        {
            gender: 'female',
            amount: usersByGender.female
        }
    ]

    console.log(chartData)

    return(
    <section>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Número de usuarios por género
      </h3>
      <BarChart
        className="mt-6"
        data={chartData}
        index="gender"
        categories={['amount']}
        colors={['blue']}
        // valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </section>

    )
    
}