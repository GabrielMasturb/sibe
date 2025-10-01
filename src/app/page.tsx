'use client';
import Image from "next/image";
import { useState } from "react";

export default function App() {
  const [cpf, setCpf] = useState<string>('');
  const [activeDiv, setActiveDiv] = useState(false);

  function handleCpf(value: string) {
    let digits = value.replace(/\D/g, "");

    if (digits.length > 11) digits = digits.slice(0, 11);

    let formatted = digits;
    if (digits.length > 6) {
      formatted = digits.replace(/(\d{3})(\d{3})(\d{1,3})(\d{0,2})/, "$1.$2.$3-$4");
    } else if (digits.length > 3) {
      formatted = digits.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    } else if (digits.length > 0) {
      formatted = digits.replace(/(\d{1,3})/, "$1");
    }

    setCpf(formatted);
  }
  function active() {
    if (cpf.length === 14) {
      setActiveDiv(true);
    }
  }
  return (
    <section>
      <header>
        <div className="menu-header">
          <h1>SIBE</h1>
          <div className="info-account">
            <div className="simbols">
              <Image src='/dark.png' alt="" width={20} height={20} />
              <p style={{ fontSize: '2em' }}>-</p>
              <Image src='/a.png' alt="" width={25} height={15} />
              <p style={{ fontSize: '1.5em' }}>+</p>
              <Image src='/acess.png' alt="" width={20} height={20} />
            </div>
            <div className="describle-account">
              <Image src='/person.png' alt="" width={20} height={20} />
              <div>
                <p>255.536.151-00 <span style={{color: 'red'}}>(servidor restrito)</span></p>
              </div>
              <Image src='/down.png' alt="" width={15} height={15} />
            </div>
            <div style={{ display: 'flex', gap: '0.5em', textTransform: 'uppercase', alignItems: 'center' }}>
              <Image src='/cadeado.png' alt="" width={20} height={20} />
              <p>Sair</p>
            </div>
          </div>
        </div>
        <div className="list-menu">
          <div className="div-update">
            <span> <Image src='/down-blue.png' alt="" width={12} height={12}/></span>
            <ul className="list-services">
              <li>Bloquear e desbloquear para empréstimo consigado</li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="info-cpf">
          <div>
            <h4 style={{ color: 'rgba(7, 28, 61, 1)', marginBottom: '1em' }}>CPF do titular</h4>
          </div>
          <input type='text' inputMode="numeric" maxLength={14} className="input-cpf" value={cpf} onChange={(e) => handleCpf(e.target.value)} autoComplete="off"></input>
          <div className="bnt-form">
            <button onClick={active}><Image src='/lupa.png' alt="" width={13} height={13} /><span>Pesquisar</span></button>
            <button><Image src='/borracha.png' alt="" width={13} height={13} /><span>Limpar</span></button>
          </div>
        </div>
      </main>
      <div className={`aviso${activeDiv ? ' active' : ''}`}>
        <h2>Atenção</h2>
        <p style={{ marginBottom: '2em' }}>
          Acesso restrito exclusivamente a funcionários da DATAPREV.
          O uso indevido deste sistema, especialmente para fins previdenciários, pode ser considerado inapropriado e sujeito a sanções.

          Este sistema tem como objetivo a realização de testes antes de sua oficialização. Para utilizá-lo, é necessário possuir um TOKEN de autorização.
        </p>
        <p>ERROR: TOKEN NOT FOUND:::: YHJ_1238761khj15!j1345kj12akcitab1LANClylbnlCaLTGAKALhdVkjFALBHLHdkGASdbSt5AKGDvkÇLJA</p>
        <Image src='/logo.png' alt="" width={200} height={150} />
      </div>
      <div className="restrite">
        <Image src='/logo.png' alt="" width={100} height={80}/>
      </div>
    </section>
  )
}