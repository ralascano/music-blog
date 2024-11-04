import React, { useEffect, useState } from 'react'
import Header from './Header'
import Dashboard from './dashboard'
import {kpopes} from '../data/blog-kpop-es'
import {kpopen} from '../data/blog-kpop-en'

const Layout = () => {
  const [data, setData] = useState(kpopes);
  const [selectData, setSelectData] = useState("kpop");
  const [lang, setLang] = useState("en")


  useEffect(() => {
    setData(lang === "en" ? kpopen : kpopes)
  }, [selectData, lang])


  return (
    <>
      <Header data={data} setData={setData} selectData={selectData} setSelectData={setSelectData} lang={lang} setLang={setLang}/>
      <Dashboard data={data} setData={setData} selectData={selectData} setSelectData={setSelectData} lang={lang} setLang={setLang}/>
    </>
  )
}

export default Layout
