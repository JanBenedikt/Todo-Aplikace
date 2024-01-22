import './App.css';
import React, { useState } from 'react';

function App() {
  return (
<div className='text'>
 <h1>Seznam Úkolů</h1>
  <div class='buttons  d-grid gap-3 col-2 mx-auto'>
 <button type="button" class="btn btn-outline-primary">Přidat úkol</button>
<button type="button" class="btn btn-outline-secondary">Odstranit Úkol</button>

</div>

<div class="container">
 <div class="card">
  <div class="card-body">
   <h3 class="card-title">Úkol</h3>
    <div class='d-grid gap-3 mx-auto'>
     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#úkol">Zobrazit seznam úkolů </button>
     <a href="#" class="btn btn-danger mt-2">Odstranit úkol</a>
    </div>
   </div>
  </div>
 </div>   
</div>
)}
export default App;
