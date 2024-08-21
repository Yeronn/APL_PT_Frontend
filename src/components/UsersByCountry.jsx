/* eslint-disable react/prop-types */
import { Card, List, ListItem } from "@tremor/react"
import { useEffect, useState } from "react"

export default function UsersByCountry({ dataUsers }) {
    const [usersByCountry, setUsersByCountry] = useState()
    
    useEffect(() => {
        const usersByCountryData = dataUsers.reduce((amountByCountry, user) => {
            const country = user.location.country
            if (amountByCountry[country]) {
              amountByCountry[country] += 1
            } else {
              amountByCountry[country] = 1
            }
            return amountByCountry;
          }, {})

          const formatData = Object.entries(usersByCountryData).map(([pais, cantidad]) => (
            {
                pais,
                cantidad
            }
        ))
        setUsersByCountry(formatData)
    }, [dataUsers])
    return(
        <section>
            {usersByCountry && 
                <Card className="mx-auto max-w-md w-80">
                    <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Usuarios por país</h3>
                    <List className="mt-2">
                        {usersByCountry.map((item) => (
                        <ListItem className="dark:text-dark-tremor-content-strong" key={item.pais}>
                            <span>{item.pais}</span>
                            <span>{item.cantidad}</span>
                        </ListItem>
                        ))}
                    </List>
                </Card>}

        </section>
    )
}