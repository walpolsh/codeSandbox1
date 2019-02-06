import React, { useState, useEffect } from "react";
import HooksTest from "./components/HooksTest";
import HooksFetch from "./components/HooksFetch";
import OldSchool from "./components/OldSchool";

export default function App() {
  return (
    <div>
      <HooksTest />
      <HooksFetch>
        <p>dafgasf</p>
      </HooksFetch>
      <OldSchool>
        <p>asgasgas</p>
      </OldSchool>
    </div>
  );
}
