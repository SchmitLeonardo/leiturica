import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { FaX } from "react-icons/fa6";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import * as dayjs from "dayjs";

function Buy() {
  const [modal, setModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(true);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [formLogin, setFormLogin] = useState({
    user: "",
    password: "",
  });
  const [form, setForm] = useState({
    // User Personal Fields
    name: "",
    document: "",
    email: "",

    // User Address Fields
    postal_code: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
    uf: "",

    // User Payment Field
    payment_type: "",

    // Credit Card Fields
    cardNumber: "",
    exp_month: "",
    exp_year: "",
    security_code: "",
    installments: "",
  });
  dayjs().format();

  async function createOrder() {
    const date = dayjs().add(7, "day");
    const dueDate = dayjs(date).format("YYYY-MM-DD");
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer B7AB33460A0A41EB8923A3BAB43991A3",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        contentType: "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        customer: {
          name: form.name,
          email: form.email,
          tax_id: form.document,
        },
        items: [
          {
            reference_id: "referencia do item",
            name: "Biblioteca Leiturica",
            quantity: 1,
            unit_amount: 19700,
          },
        ],
        charges: [
          {
            amount: {
              value: 19700,
              currency: "BRL",
            },
            payment_method: {
              boleto: {
                instruction_lines: {
                  line_1: "Pagamento processado para DESC Fatura",
                  line_2: "Via PagSeguro",
                },
                holder: {
                  address: {
                    country: "Brasil",
                    region: form.state,
                    region_code: form.uf,
                    city: form.city,
                    postal_code: form.postal_code,
                    street: form.street,
                    number: form.number,
                    locality: form.district,
                  },
                  name: form.name,
                  tax_id: form.document,
                  email: form.email,
                },
                due_date: dueDate,
              },
              type: "BOLETO",
            },
            reference_id: "referencia da cobranca",
            description: "descricao da cobranca",
          },
        ],
        reference_id: "00001",
      }),
    };

    fetch("https://sandbox.api.pagseguro.com/orders", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    // await axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);

    //     setModal(false);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }

  function setState(state) {
    // eslint-disable-next-line default-case
    switch (state) {
      case "AC":
        return "Acre";
      case "AL":
        return "Alagoas";
      case "AP":
        return "Amapá";
      case "AM":
        return "Amazonas";
      case "BA":
        return "Bahia";
      case "CE":
        return "Ceará";
      case "DF":
        return "Distrito Federal";
      case "ES":
        return "Espirito Santo";
      case "GO":
        return "Goiás";
      case "MA":
        return "Maranhão";
      case "MS":
        return "Mato Grosso do Sul";
      case "MT":
        return "Mato Grosso";
      case "MG":
        return "Minas Gerais";
      case "PA":
        return "Pará";
      case "PB":
        return "Paraíba";
      case "PR":
        return "Paraná";
      case "PE":
        return "Pernambuco";
      case "PI":
        return "Piauí";
      case "RJ":
        return "Rio de Janeiro";
      case "RN":
        return "Rio Grande do Norte";
      case "RS":
        return "Rio Grande do Sul";
      case "RO":
        return "Rondônia";
      case "RR":
        return "Roraima";
      case "SC":
        return "Santa Catarina";
      case "SP":
        return "São Paulo";
      case "SE":
        return "Sergipe";
      case "TO":
        return "Tocantins";
    }
  }

  function getAddress() {
    axios
      .get(`https://viacep.com.br/ws/${form.postal_code}/json/`)
      .then((response) => {
        console.log(response.data);
        setForm({
          ...form,
          street: response.data.logradouro,
          district: response.data.bairro,
          city: response.data.localidade,
          uf: response.data.uf,
          state: setState(response.data.uf),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function maskMoney(value) {
    value.toString();
    if (!value) return "0,00";

    if (Number.isNaN(value)) {
      return "0,00";
    }

    return value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function maskCep(value) {
    return value.replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1.$2-$3");
  }

  function maskCPF(value) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function maskCreditCard(value) {
    return value.replace(
      /^([\d]{4})\.*([\d]{4})-*([\d]{4})-*([\d]{4})/,
      "$1 $2 $3 $4"
    );
  }

  function handleLogin() {
    if (formLogin.user === 'leonardo' && formLogin.password === 'A3c=KvDa0N!B$?J3') {
      setModalLogin(false);
      sessionStorage.setItem('@login', false);
    }
  }

  useEffect(() => {
    const logged = JSON.parse(sessionStorage.getItem('@login'));
    if (logged !== null) {
        console.log(logged);
        setModalLogin(logged);
    }
  }, [])

  return (
    <>
      {modalLogin ? (
        <div className={styles.modal}>
          <div className={styles.login}>
            <h2>Acesso Restrito</h2>
            <div className={styles.margin}></div>
            <TextField
              id="user"
              fullWidth
              label="Usuário"
              variant="outlined"
              size="small"
              value={formLogin.user}
              onChange={(event) => {
                setFormLogin({ ...formLogin, user: event.target.value });
              }}
            />
            <div className={styles.margin}></div>
            <TextField
              id="password"
              fullWidth
              label="Senha"
              variant="outlined"
              size="small"
              type="password"
              value={formLogin.password}
              onChange={(event) => {
                setFormLogin({ ...formLogin, password: event.target.value });
              }}
            />
            <div className={styles.margin}></div>
            <div className={styles.row}>
              <div
                className={styles.button}
                onClick={() => {
                  handleLogin();
                }}
              >
                Pronto
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          {modal && (
            <div className={styles.modalPayment}>
              <div className={styles.modal}>
                <div className={styles.header}>
                  <h2>Formulário de Pagamento</h2>
                  <p>
                    Preencha os campos abaixo com seus dados para realizar o
                    pagamento
                  </p>
                  <FaX
                    onClick={() => {
                      setModal(false);
                    }}
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.margin}></div>
                  <h4>Dados do Cliente</h4>
                  <TextField
                    id="name"
                    fullWidth
                    label="Nome Completo"
                    variant="outlined"
                    size="small"
                    value={form.name}
                    onChange={(event) => {
                      setForm({ ...form, name: event.target.value });
                    }}
                  />
                  <div className={styles.margin}></div>
                  <div className={styles.row}>
                    <TextField
                      id="document"
                      fullWidth
                      label="CPF"
                      variant="outlined"
                      size="small"
                      value={maskCPF(form.document)}
                      onChange={(event) => {
                        setForm({ ...form, document: event.target.value });
                      }}
                    />
                    <div className={styles.margin}></div>
                    <TextField
                      id="email"
                      fullWidth
                      label="E-mail"
                      variant="outlined"
                      size="small"
                      value={form.email}
                      onChange={(event) => {
                        setForm({ ...form, email: event.target.value });
                      }}
                    />
                  </div>
                  <div className={styles.margin}></div>
                  <h4>Endereço do Cliente</h4>
                  <TextField
                    id="postal_code"
                    fullWidth
                    label="CEP"
                    variant="outlined"
                    size="small"
                    value={maskCep(form.postal_code)}
                    onChange={(event) => {
                      setForm({ ...form, postal_code: event.target.value });
                    }}
                    onBlur={() => {
                      getAddress();
                    }}
                  />
                  <div className={styles.margin}></div>
                  <TextField
                    id="street"
                    fullWidth
                    label="Rua"
                    variant="outlined"
                    size="small"
                    value={form.street}
                    onChange={(event) => {
                      setForm({ ...form, street: event.target.value });
                    }}
                  />
                  <div className={styles.margin}></div>
                  <div className={styles.row}>
                    <TextField
                      id="number"
                      fullWidth
                      label="Número"
                      variant="outlined"
                      size="small"
                      value={form.number}
                      onChange={(event) => {
                        setForm({ ...form, number: event.target.value });
                      }}
                    />
                    <div className={styles.margin}></div>
                    <TextField
                      id="district"
                      fullWidth
                      label="Bairro"
                      variant="outlined"
                      size="small"
                      value={form.district}
                      onChange={(event) => {
                        setForm({ ...form, district: event.target.value });
                      }}
                    />
                  </div>
                  <div className={styles.margin}></div>
                  <div className={styles.row}>
                    <TextField
                      id="city"
                      fullWidth
                      label="Cidade"
                      variant="outlined"
                      size="small"
                      value={form.city}
                      onChange={(event) => {
                        setForm({ ...form, city: event.target.value });
                      }}
                    />
                    <div className={styles.margin}></div>
                    <TextField
                      id="state"
                      fullWidth
                      label="Estado"
                      variant="outlined"
                      size="small"
                      value={form.state}
                      onChange={(event) => {
                        setForm({ ...form, state: event.target.value });
                      }}
                    />
                    <div className={styles.margin}></div>
                    <TextField
                      id="uf"
                      label="UF"
                      variant="outlined"
                      size="small"
                      value={form.uf}
                      onChange={(event) => {
                        setForm({ ...form, uf: event.target.value });
                      }}
                    />
                  </div>
                  <div className={styles.margin}></div>
                  <h4>Dados de Pagamento</h4>
                  <TextField
                    id="payment_type"
                    fullWidth
                    select
                    size="small"
                    label="Forma de pagamento"
                    value={form.payment_type}
                    onChange={(event) => {
                      setForm({ ...form, payment_type: event.target.value });

                      if (
                        event.target.value === "credit_card" ||
                        event.target.value === "debit_card"
                      ) {
                        setShowCreditCard(true);
                      } else {
                        setShowCreditCard(false);
                      }
                    }}
                  >
                    <MenuItem value="billet">Boleto Bancário</MenuItem>
                    <MenuItem value="credit_card">Cartão de Crédito</MenuItem>
                    <MenuItem value="debit_card">Cartão de Débito</MenuItem>
                  </TextField>
                  {showCreditCard && (
                    <>
                      <div className={styles.margin}></div>
                      <TextField
                        id="cardNumber"
                        fullWidth
                        label="Número do Cartão"
                        variant="outlined"
                        size="small"
                        value={maskCreditCard(form.cardNumber)}
                        onChange={(event) => {
                          setForm({ ...form, cardNumber: event.target.value });
                        }}
                      />
                      <div className={styles.margin}></div>
                      <div className={styles.row}>
                        <TextField
                          id="exp_month"
                          fullWidth
                          label="Mês"
                          variant="outlined"
                          size="small"
                          value={form.exp_month}
                          onChange={(event) => {
                            setForm({ ...form, exp_month: event.target.value });
                          }}
                        />
                        <div className={styles.margin}></div>
                        <TextField
                          id="exp_year"
                          fullWidth
                          label="Ano"
                          variant="outlined"
                          size="small"
                          value={form.exp_year}
                          onChange={(event) => {
                            setForm({ ...form, exp_year: event.target.value });
                          }}
                        />
                        <div className={styles.margin}></div>
                        <TextField
                          id="security_code"
                          fullWidth
                          label="Código de Seguraça"
                          variant="outlined"
                          size="small"
                          value={form.security_code}
                          onChange={(event) => {
                            setForm({
                              ...form,
                              security_code: event.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className={styles.margin}></div>
                      <TextField
                        id="installments"
                        fullWidth
                        select
                        size="small"
                        label="Quantidade de parcelas"
                        value={form.installments}
                        onChange={(event) => {
                          setForm({
                            ...form,
                            installments: event.target.value,
                          });
                        }}
                      >
                        <MenuItem value="1x" disabled>
                          Em 1x vezes de R$ {maskMoney(197)} sem juros
                        </MenuItem>
                        <MenuItem value="2x">
                          Em 2x vezes de R$ {maskMoney(197 / 2)} sem juros
                        </MenuItem>
                        <MenuItem value="3x">
                          Em 3x vezes de R$ {maskMoney(197 / 3)} sem juros
                        </MenuItem>
                        <MenuItem value="4x">
                          Em 4x vezes de R$ {maskMoney(197 / 4)} sem juros
                        </MenuItem>
                      </TextField>
                    </>
                  )}
                  <div className={styles.margin}></div>
                  <div className={styles.row}>
                    <div
                      className={styles.button}
                      onClick={() => {
                        createOrder();
                      }}
                    >
                      Pronto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h1>Agende seu atendimento!</h1>

          <div className={styles.card}>
            <h2>Biblioteca Leiturica</h2>
            <p className={styles.oldValue}>DE: R$260,00</p>
            <p className={styles.newValue}>POR: R$197,00</p>

            <div
              className={styles.button}
              onClick={() => {
                setModal(true);
              }}
            >
              Quero Agendar
            </div>
          </div>

          <p>
            <i>PAGAMENTO ONLINE 100% SEGURO</i>
          </p>
          <p>
            <i>
              Pague com boleto ou parcele em até 4x no seu cartão de crédito.
            </i>
          </p>
          <p>
            <i>
              CASO MUDE DE IDEIA VOCÊ TEM 7 DIAS PARA CANCELAR E RECEBER SEU
              DINHEIRO DE VOLTA.
            </i>
          </p>
        </div>
      )}
    </>
  );
}

export default Buy;
