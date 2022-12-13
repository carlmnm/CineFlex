import DaysList from "./ContainerDays"
import Head from "./Header"
import PageTitle from "./SubHeader"
import Foot from "./FooterSeats"
import Acentos from "./Seats"

export default function Screen3({ cadeiras, setCadeiras, title, setTitle, time, setTime, data, setData, nome, setNome, cpfClient, setCpfClient }) {

    return (
        <>
            <Head />
            <PageTitle />
            <Acentos
                cadeiras={cadeiras}
                setCadeiras={setCadeiras}
                title={title}
                setTitle={setTitle}
                time={time}
                setTime={setTime}
                data={data}
                setData={setData}
                nome={nome}
                setNome={setNome}
                cpfClient={cpfClient}
                setCpfClient={setCpfClient}
            />
            <Foot
                cadeiras={cadeiras}
                setCadeiras={setCadeiras}
                title={title}
                setTitle={setTitle}
                time={time}
                setTime={setTime}
                data={data}
                setData={setData}
                cpfClient={cpfClient}
                setCpfClient={setCpfClient}
            />

        </>
    )
}