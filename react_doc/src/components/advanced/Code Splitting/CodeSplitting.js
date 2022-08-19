import React, {Suspense, useState} from 'react'
const TaskList = React.lazy(() => import('./TaskList'))
const Profile = React.lazy(() => import('./Profile'))
const Authorization = React.lazy(() => import('./Authorization'))

function CodeSplitting() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Profile />
        <TaskList />
        <Authorization />
      </Suspense>
    </div>
  )
}

export default CodeSplitting


// avoid fallbacks

function CodeSplitting() {
  const [tab, setTab] = useState('profile');

  // function handleTabSelect(tab) {
  //   setTab(tab);
  // };

  //startTransition, обрабатываются как несрочные и будут прерваны,
  //если поступят более приоритетные обновления, такие как щелчки или нажатия клавиш.
  //Если переход прерывается пользователем (например, путем ввода нескольких символов в строке),
  //React дает выполнить устаревшую работу по рендерингу, которая не была завершена, и рендерить только последнее обновление.
  function handleTabSelect(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }

  return (
    <div>
      <Tabs onTabSelect={handleTabSelect} />
      <Suspense fallback={<div>loading</div>}>
        {tab === 'profile' ? <Profile /> : tab === 'tasklist' ? <TaskList/> : <Authorization />}
      </Suspense>
    </div>
  )
}

// Route-based code splitting

function Menu() {
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/' element={<Profile /> }/>
        <Route path='/tasks' element={<TaskList /> }/>
        <Route path='/authorization' element={<Authorization /> }/>
      </Routes>
    </Suspense>
  </BrowserRouter>
}