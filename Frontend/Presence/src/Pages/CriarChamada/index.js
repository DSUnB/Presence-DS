import React, { useState, useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Pressable, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import PressableBtnBack from "../../components/PressableBtnBack";
import PressableCircle from "../../components/pressableCircle";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconO from 'react-native-vector-icons/Octicons';
import IconX from 'react-native-vector-icons/Ionicons';
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from "expo-linear-gradient";
import Inputs from "../../components/inputs";
import IconLu from 'react-native-vector-icons/SimpleLineIcons';
import IconA from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-modern-datepicker';
import { Context } from '../../context/Provider';
import config from "../../config/config.json";
import moment from 'moment';
import 'moment/locale/pt-br'

// =========================================================
// GERAÇÃO DA DATA EM PORTUGUES:
moment().format();
moment.locale('pt-br');
// =========================================================

// =========================================================
// GERAÇÃO DE CÓDIGO CHAMADA:
function codigoChamada(num) {
  let codigo= Math.random().toString(36).substring(2,num);       

  return codigo.toUpperCase();
}
// =========================================================

const EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <View>
      <Text style={{ fontFamily: "poppinsr", fontSize: 18, textAlign: 'center',}}>
        Não há listas de presenças.
      </Text>
      <Text style={{ fontFamily: "poppinsr", fontSize: 13, textAlign: 'center'}}>
        Selecione um mês ou crie uma chamada!
      </Text>
    </View>   
  );
};

export default function CriarChamada({ navigation }) {

  const [date, setDate] = useState('');

  /* Função criada para a atualização do mês de acordo com o calendário*/

  async function DiaMes(){
    // console.log(date)
    let reqs = await fetch(config.urlRootNode+'professor/chamada/filtrar', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoTurma: codTurma,
        mes: date.slice(5,7),
        ano: date.slice(0,4),
      })
    });
    let res= await reqs.json();
    if(res){
      setMesFiltrada(DistribMes());
      setAnoFiltrada(date.slice(0,4));
      setChamadas(res);
      setModalActive3(false);
    }
  }

  function DistribMes(){
    var mes
    switch (date.slice(5,7)){
      case "01":
        mes = "Janeiro";
        break;
      case "02":
        mes = "Fevereiro";
        break;
      case "03":
        mes = "Março";
        break;
      case "04":
        mes = "Abril";
        break;
      case "05":
        mes = "Maio";
        break;
      case "06":
        mes = "Junho";
        break;
      case "07":
        mes = "Julho";
        break;
      case "08":
        mes = "Agosto";
        break;
      case "09":
        mes = "Setembro";
        break;
      case "10":
        mes = "Outubro";
        break;
      case "11":
        mes = "Novembro";
        break;
      case "12":
        mes = "Dezembro";
        break;
    }
    return mes;
  }
  //Const's criados para o aparecimento e desaparecimento dos modais

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [modalActive4, setModalActive4] = useState(false);
  const [turma, setTurma] = useState(false);
  const [materia, setMateria] = useState(false);
  const [message, setMessage]=useState(null);
  const [message2, setMessage2]=useState(null);
  const [message3, setMessage3]=useState(null);
  const [message4, setMessage4]=useState(null);
  const {nomeCurso, setNomeCurso} = useContext(Context);
  const {codTurma} = useContext(Context);
  const {setCodChamada} = useContext(Context);
  const {setDADOS} = useContext(Context);
  const {setSituation} = useContext(Context);
  const {chamadas, setChamadas} = useContext(Context);
  const {setDiaChamada} = useContext(Context);
  const {setMesNominalChamada} = useContext(Context);
  const {setRespostaChamada} = useContext(Context);
  const {setAlunosTurma} = useContext(Context);
  const {setPorcentagem1} = useContext(Context);
  const [mesFiltrada, setMesFiltrada] = useState(moment().format('MMMM'));
  const [anoFiltrada, setAnoFiltrada] = useState(moment().format('YYYY'));


  // ====================================================================
  // FUNÇÃO PARA CRIAR UMA CHAMADA:
  async function CriarChamada(){    
      let reqs = await fetch(config.urlRootNode+'professor/chamada/criar', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              codigoTurma: codTurma,
              codigoChamada: codigoChamada(7),
              dia: moment().format('DD'),
              diaNominal: moment().format('ddd'),
              mes: moment().format('MM'),
              mesNominal: moment().format('MMMM'),
              ano: moment().format('YYYY'),
          })   
      });
      
      let res= await reqs.json();
      if(res){
        if (res == '202.1'){
            setMessage4('Você já fez uma chamada!');
            setTimeout(() => {
              setMessage4(null);
              setModalActive4(false);
            }, 2000);
        }
        if (res.situation == true){
            setCodChamada(res.codigoChamada);
            setSituation(true);
            setMessage3('Chamada criada!');
            setPorcentagem1([1,0]);
            setTimeout(() => {
              setMessage3(null);
              setModalActive4(false);
              navigation.navigate('Chamada');
            }, 2000);
        }
        else if (res.situation == false){
            setCodChamada(res.codigoChamada);
            setSituation(false);
            setMessage3('Chamada criada!');
            setPorcentagem1([1,0]);
            setTimeout(() => {
              setMessage3(null);
              setModalActive4(false);
              navigation.navigate('Chamada');
            }, 2000);
        }
      }
  }
  // ====================================================================


  // ====================================================================
  // FUNÇÃO PARA EXCUIR TURMA:
  async function ExcluirTurma(){
    let reqs = await fetch(config.urlRootNode+'professor/turma/excluir', {
        method: 'DELETE',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigoTurma: codTurma
        })
      });
      let res= await reqs.json();
      if (res) {
         AtualizarTurma(1)
      }
}
  // ====================================================================

  // =========================================================
  // FUNÇÃO PARA ATUALIZAR A LISTA DE TURMAS:
  async function AtualizarTurma(method){
    let response = await AsyncStorage.getItem('userData');
    let json = JSON.parse(response);
    let reqs = await fetch(config.urlRootNode+'professor/turma/obter', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        professor: json.matricula,
      })
    });
    let res= await reqs.json();
    if(res) {
      if (method == 1){
        setDADOS(res)
        setMessage2('Turma Excluída!');
          setTimeout(() => {
            setMessage2(null);
            setModalActive2(false);
            navigation.navigate('MainProf');
          }, 2000);
      }
      else if (method == 2){
        setDADOS(res);
        setMateria(null);
        setTurma(null);
        navigation.navigate('MainProf');
      }
    }
  }
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA EDIÇÃO DE TURMA:
  async function EditarTurma(){
    if ((materia == null || materia == '') || (turma == null || turma == '')){
        setMessage('Preencha Todos os Campos!');
        setTimeout(() => {
          setMessage(null);
        }, 2000);
    }
    else {
      let reqs = await fetch(config.urlRootNode+'professor/turma/atualizar', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigoTurma: codTurma,
          materia: materia,
          turma: turma
        })
      });
      let res= await reqs.json();
      if (res) {
        setMessage('Turma Editada!');
        setNomeCurso(materia + ' - ' + turma);
          setTimeout(() => {
            setMessage(null);
            setMateria(null);
            setTurma(null);
            setModalActive1(false);
          }, 2000);
      }
    }
  }
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA PESQUISAR SE ALGUM ALUNO RESPONDEU A CHAMADA:
  async function PesquisarRespostas(chamada){
      let reqs = await fetch(config.urlRootNode+'professor/chamada/resposta', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigoChamada: chamada,
        })
      });
      let res= await reqs.json();
      if (res){
        if (res == '403'){
          null;
        }
        else if (res){
          setRespostaChamada(res);
          PorcentagemPresenca(chamada);
        }
      }
  }
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA PESQUISAR ALUNOS DA TURMA:
  async function PesquisarAlunos(){
    let reqs = await fetch(config.urlRootNode+'professor/turma/alunos', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoTurma: codTurma,
      })
    });
    let res= await reqs.json();
    if (res) {
      if (res == '403'){
        null
      }
        else{
          setAlunosTurma(res);
          navigation.navigate('Turma');
        }
    }
}
// =========================================================

  // =========================================================
  // FUNÇÃO PARA AJUSTAR A PORCENTAGEM DA CHAMADA:
  async function PorcentagemPresenca(chamada){
    let reqs = await fetch(config.urlRootNode+'professor/porcentagem/chamada', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoTurma: codTurma,
        codigoChamada: chamada,
      })
    });
    let res= await reqs.json();
    if (res) {
      if (res[1] == 0){
        setAlunosTurma([1,0]);
        navigation.navigate('Chamada');
      }
      else {
        setPorcentagem1(res);
        navigation.navigate('Chamada');
      }
    }
}
// =========================================================

  // =========================================================
  // FUNÇÃO PARA MOSTRAR CHAMADA ESPECÍFICA:
  function EnvioDados(dado1, dado2, dado3, dado4){
    if (dado1 == 0){
      setSituation(false);
    }
    else {
      setSituation(true);
    }
    setCodChamada(dado2);
    setDiaChamada(dado3);
    setMesNominalChamada(dado4[0].toUpperCase() + dado4.substring(1))
    PesquisarRespostas(dado2);
    // navigation.navigate('Chamada');
  }
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA MOSTRAR CHAMADA ESPECÍFICA:
  function PermanenciaDadoCalendario(){
    setModalActive3(true);
    // navigation.navigate('Chamada');
  }
  // =========================================================

  // =========================================================
  // Início da criação da página

  return (
  <ImageBackground source={require('../../assets/images/VetorChamada.png')} resizeMode="cover">
    <SafeAreaView style={style.container}>
      
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>{nomeCurso}</Text>
            </View>
            <View style={style.voltar}>
                <PressableBtnBack
                    click={() => AtualizarTurma(2)}
                    iconeIo="chevron-back"
                />
            </View>
        </View>

      <View style={{marginTop: 90, marginBottom: 75, height:'70%', justifyContent: "space-around", alignItems: 'center',}}>
        <View style={style.code}>
          <View style={{width: 55,height: 55, borderRadius: 100, backgroundColor: 'white', position: 'absolute', top: 6, left: 6}}>
            <IconO style={{alignSelf:'center', marginTop: 10}} name='key' size={30}/>
          </View>
          <Text style={{ fontFamily: "poppinsb", fontSize: 24, textAlign: 'center', paddingLeft: 15, marginTop: 14 }}>{codTurma}</Text>
        </View>

          <Pressable onPress={() => PermanenciaDadoCalendario()}>
            <View style={style.search}>
              <IconLu style={{marginTop:15, marginBottom:15, marginLeft:15, color:'#ADA4A5'}}name='magnifier' size={20}/>
              <Text style={{fontFamily:'poppinsr' , fontSize:16, textAlign:'center', color:"#ADA4A5" , marginTop:13,}}> Procure por um mês </Text>
            </View>
          </Pressable>

          <View style={{height: 145}}>
            <Text style={{ fontFamily: "poppinsr", color: '#ADA4A5', textAlign:'center', fontSize: 17, marginBottom: 10}}>{mesFiltrada[0].toUpperCase() + mesFiltrada.substring(1)} de {anoFiltrada}</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={chamadas}
                ListEmptyComponent={EmptyListMessage}
                renderItem={({ item }) => (
                  <TouchableOpacity style={style.chamada} underlayColor="#46B297" onPress={() => EnvioDados(item.situation, item.codigoChamada, item.dia, item.mesNominal)}>
                    <View style={{alignSelf: 'center',  justifyContent: 'center', top: '25%'}}>
                      <Text style={{ fontFamily: "poppinsr", fontSize: 15, textAlign: 'center', marginBottom: 3 }}>{item.diaNominal[0].toUpperCase() + item.diaNominal.substring(1)}</Text>
                      <Text style={{ fontFamily: "poppinsr", fontSize: 17, textAlign: 'center', marginTop: 3 }}>{item.dia}</Text>
                    </View> 
                  </TouchableOpacity>
                )}>
              </FlatList>
      </View>

          <View style={{zIndex: 4}}>
            <Pressables
              texto='Criar Chamada'
              click={() => setModalActive4(true)}
            />
          </View>
        </View>

      <View style={style.footer}>
        <View style={{width: 24, height: 24,}}>
          <IconF style={{alignSelf: 'center', color: '#ADA4A5'}} name='edit' size={23.5} onPress={() => setModalActive1(true)}/>
        </View>
        <View style={{paddingBottom: 35}}>
          <PressableCircle
            click={() => PesquisarAlunos()}
            iconeFA5="users"
          >
          </PressableCircle>
        </View>
        <View style={{width: 24, height: 24}}>
          <IconMCI style={{alignSelf: 'center', color: '#DB4E4E'}} name='delete' size={27} onPress={() => setModalActive2(true)}/>
        </View>
      </View>

        {/* Modais */}
      {/* Modal Edit */}
      <Modal visible={modalActive1} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal1}
          >
            <IconX
              style={style.close}
              name="close-circle"
              size={30}
              onPress={() => setModalActive1(false)}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", marginTop:5}}>
                Editar sua turma
              </Text>
              {message && (
                  <>
                    <View style={{display:'flex', flexDirection:'row'}}>
                    <IconA name='alert-triangle' size={20} style={{marginRight:10, color:'#fff'}}/>
                    <Text style={{fontFamily:'poppinsr', fontSize:15, color:'#fff'}}>{message}</Text>
                    </View>
                  </>
                )}
              <Inputs place="Nova Matéria" iconeF="book" onChange={(text) => setMateria(text)}/>
              <Inputs place="Nova Turma" iconeO="people" onChange={(text) => setTurma(text)}/>
            </View>
            <View style={{marginTop:15}}>
              <PressablesModal
                texto="Editar"
                click={EditarTurma}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>


      {/* Modal Delete */}
      <Modal visible={modalActive2} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal2}
          >

            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", top: -25}}
              >
              Deseja deletar essa turma?
            </Text>

            {message2 && (
                  <>
                    <View style={{display:'flex' , flexDirection:'row', top:-25}}>
                      <IconA name='alert-triangle' size={20} style={{marginRight:10, color:'#fff'}}/>
                      <Text style={{fontFamily:'poppinsr', fontSize:15, color:'#fff'}}>{message2}</Text>
                    </View>
                  </>
                )}
                
            <View style={style.alinhamento}>
              <PressablesModal
                texto="Sim"
                click={ExcluirTurma}
                />
              <PressablesModal2
                texto="Não"
                click={() => setModalActive2(false)}
                />
            </View>
          </LinearGradient>
        </View>
      </Modal>

      {/* Modal Calendário */}
      <Modal visible={modalActive3} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 1.0]}
            style={style.modal3}
          >
            <IconX
              style={style.close}
              name="close-circle"
              size={30}
              onPress={() => setModalActive3(false)}
            />
            <DatePicker
              options={{
                backgroundColor: 'rgba(44,94,122,0)',
                textHeaderColor: 'white',
                textDefaultColor: 'white',
                selectedTextColor: 'black',
                mainColor: '#69D498',
                textSecondaryColor: '#9DCEFF',
                borderColor: 'rgba(122, 146, 165, 0.6)',
                defaultFont: 'poppinsr',
                headerFont: 'poppinsb',
              }}
              mode="monthYear"
              onMonthYearChange={selectedDate => setDate(selectedDate)}
              style={{ borderRadius: 10, marginTop: 5 }}
            />
            <View style={{height: 36, width: 91, position: 'absolute', bottom: 38}}>
              <PressablesModal
                texto="Ok"
                click={() => DiaMes(date)}
              />
            </View>
           </LinearGradient>
        </View>
      </Modal>

        {/* Modal Confirmar chamada */}
        <Modal visible={modalActive4} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal2}
          >
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", top:-55, marginBottom:-55 }}
              >
              Deseja criar uma chamada?
            </Text>
                {message3 && (
                     <View style={{display:'flex' , flexDirection:'row', alignItems:"center"}}>
                     <IconA name='alert-triangle' size={15} style={{marginRight:10, color:'#fff'}}/>
                     <Text style={{fontFamily:'poppinsr', fontSize:15, color:'#fff'}}>{message3}</Text>
                     </View>
                )}

                {message4 && (
                     <View style={{display:'flex' , flexDirection:'row', alignItems:"center"}}>
                     <IconA name='alert-triangle' size={15} style={{marginRight:10, color:'#fff'}}/>
                     <Text style={{fontFamily:'poppinsr', fontSize:15, color:'#fff'}}>{message4}</Text>
                     </View>
                )}

              <View style={style.alinhamento}>
                <PressablesModal
                  texto="Sim"
                  click={CriarChamada}
                />
                <PressablesModal2
                  texto="Não"
                  click={() => setModalActive4(false)}
                />
              </View>
          </LinearGradient>
        </View>
      </Modal>
    </SafeAreaView>
  </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    width: "100%",
    height: 110,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  voltar: {
    position:"absolute",
    zIndex: 2,
    top: 55,
    left: 20,
  },
  code: {
    width: 319,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#DFF5EB',
  },
  footer:{
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: 450,
    height: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0,
    borderRadius: 2,
    borderColor: 'rgba(221,221,221)',
    borderTopWidth: 0.2,
    shadowColor: 'rgb(221,221,221)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 0.3,
  },
  fundoModal: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modal1: {
    borderRadius: 22,
    width: 340,
    height: 265,
    alignItems: "center",
    justifyContent: "center",
  },
  modal3: {
    borderRadius: 22,
    width: 340,
    height: 460,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: "#ffffff",
    zIndex: 2,
  },
  modal2: {
    width: 275,
    height: 173,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  alinhamento: {
    position: 'absolute',
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search:{
    height:50,
    borderRadius:16,
    width:315,
    backgroundColor:'white',
    zIndex:4,
    borderColor:"#2F7286",
    borderWidth:1,
    flexDirection: "row",
  },
  chamada:{
    width: 73,
    height: 98,
    borderRadius: 12,
    backgroundColor: '#F7F8F8',
    marginLeft: 12,
    borderColor: 'black',
  },
  loading:{
    height: 30,
    width: 140,
  }
});