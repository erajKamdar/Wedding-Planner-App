import React, { Component } from 'react'

export default function Main({children, main}) {
    return <header className={main}>{children}</header>       
}
Main.defaultProps = {
    main: "MainImgSet",
};