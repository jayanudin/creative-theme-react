import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

const header = document.getElementById('header');
ReactDOM.render(<Header/>, header);

const contact = document.getElementById('contact');
ReactDOM.render(<Contact/>, contact);

const nav = document.getElementById('navigation');
ReactDOM.render(<Navigation/>, nav);

const portfolio = document.getElementById('portfolio');
ReactDOM.render(<Portfolio/>, portfolio);

const service = document.getElementById('service');
ReactDOM.render(<Service/>, service);

