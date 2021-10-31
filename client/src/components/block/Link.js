import React from 'react'
import {NavLink} from 'react-router-dom'

export const Link = ({link}) =>
        link?.out?<a href={link.href}>{link.text}</a>:<NavLink to={link.href}>{link.text}</NavLink>