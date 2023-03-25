import React from 'react'
import { useState, useEffect } from 'react';
//impoer commponents from ant-designs
import { Input, Popover, Radio, modal, message} from "antd";
import { 
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,

} from '@ant-design/icons';
import tokenList from "../tokenList.json"

function Swap() {

    const [slippage, setSlippage] = useState(2.5);
    const [tokenOneAmount, setTokenOneAmount] = useState(null);
    const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
    const [tokenOne, setTokenOne] = useState(tokenList[7]);
    const [tokenTwo, setTokenTwo] = useState(tokenList[9]);


    function handleSlippageChange(e){
      setSlippage(e.target.value);
    }

    function changeAmount(e){
      setTokenOneAmount(e.target.value)
    }
    
    function switchTokens(){
      const one = tokenOne;
      const two = tokenTwo;
      setTokenOne(two);
      setTokenTwo(one);
    }



  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>

        </Radio.Group>
      </div>
    
    </>

  )


  return (
    <div className='tradeBox'>
      <div className='tradeBoxHeader'>
        <h4>Flip</h4>
        <Popover
          content={settings}
          title="Settings"
          trigger="click"
          placement="bottomRight"
        >
        <SettingOutlined className='cog'/>
        </Popover>
      </div>
      <div className='inputs'>
          <Input placeholder='0' value={tokenOneAmount} onChange={changeAmount} />
          <Input placeholder='0' value={tokenTwoAmount} disabled={true} />
            
           <div className="switchButton" onClick={switchTokens}>
            <ArrowDownOutlined className='SwitchArrow' />
           </div>

           <div className='assetOne'>
            <img src={tokenOne.img} alts='assetOneLogo' className='assetLogo'/>
            {tokenOne.ticker}
            <DownOutlined/>
           </div>

           <div className='assetTwo'>
           <img src={tokenTwo.img} alts='assetOneLogo' className='assetLogo'/>
            {tokenTwo.ticker}
            <DownOutlined/>
           </div>

      </div>
    </div>
  );
}

export default Swap;