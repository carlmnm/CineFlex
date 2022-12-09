import { useState } from "react"
import { useParams } from "react-router-dom"
import DaysList from "./ContainerDays"
import Head from "./Header"
import PageTitle from "./SubHeader"
import Foot from "./FooterSessoes"

export default function Screen2(){

    return(
        <>
        <Head/>
        <PageTitle/>
        <DaysList/>
        <Foot/>
        </>
    )
}