import { useEffect, useState } from 'react';
import { ImageParams } from './EditScreen.types';


export const useEditScreen  = (params: any)  => { 
  const [url, setUrl] = useState(params.item.url);
  const [isLoading, setIsLoading] = useState(false);

  const [currentParams, setCurrentParams] = useState<ImageParams>({
    rotation : 0,
    brightness : 0,
    contrast : 0,
    exposure : 0,
    gamma : 0,
    highlight : 0,
    hue : 0,
    invert : 0,
    saturation : 0,
    shadow : 0,
    sharpness : 0,
    usm : 0,
    usmrad : 2.5,
    vibrance: 0,
  });
  const [versionControl, setVersionControl] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [history, setHistory] = useState<ImageParams[]>([]);
  const [forwardHistory, setForwardHistory] = useState<ImageParams[]>([]);

  const undo = () => {
    if(history.length>1) {
      setVersionControl(true);
      setCurrentParams(history[history.length-2]);
      setHistory(history.slice(0,history.length-2));
      setForwardHistory([history[history.length-1],...forwardHistory]);
    }
  }

  const redo = () => {
    if(forwardHistory.length>=1) {
      setVersionControl(true);
      setCurrentParams(forwardHistory[0]);
      setForwardHistory(forwardHistory.slice(1));
    }
  }

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  }

  useEffect(() => {
    if(!versionControl){
      setForwardHistory([]);
    }
    setUrl(params.item.url+'?'
      +'rot='+currentParams.rotation+'&'
      +'bri='+currentParams.brightness+'&'
      +'con='+currentParams.contrast+'&'
      +'exp='+currentParams.exposure+'&'
      +'gam='+currentParams.gamma+'&'
      +'high='+currentParams.highlight+'&'
      +'hue='+currentParams.hue+'&'
      +'invert='+currentParams.invert+'&'
      +'sat='+currentParams.saturation+'&'
      +'shad='+currentParams.shadow+'&'
      +'sharp='+currentParams.sharpness+'&'
      +'usm='+currentParams.usm+'&'
      +'usmrad='+currentParams.usmrad+'&'
      +'vib='+currentParams.vibrance
    );  
    setVersionControl(false);
    setHistory([...history,currentParams]);
  },[currentParams]);

  return {
    url,
    isLoading,
    setIsLoading,
    currentParams,
    setCurrentParams,
    history,
    forwardHistory,
    undo,
    redo,
    toggleHistory,
    isHistoryVisible,
  };
};