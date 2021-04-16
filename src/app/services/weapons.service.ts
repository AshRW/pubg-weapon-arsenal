import { Injectable } from '@angular/core';
import * as ar_info  from '../../assets/gun_info/json_format/assault_rifle.json';
import * as smg_info from '../../assets/gun_info/json_format/smg.json';
import * as dmr_info from '../../assets/gun_info/json_format/dmr.json';
import * as lmg_info from '../../assets/gun_info/json_format/lmg.json';
import * as sniper_info from '../../assets/gun_info/json_format/bolt_action_sniper_rifle.json';
import * as shotgun_info from '../../assets/gun_info/json_format/shotgun.json';
//attachments json
import * as ar_attach from '../../assets/attach_info/ar_attachments.json';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor() { }
  private ar: any = (ar_info as any).default;
  private smg:any=(smg_info as any).default;
  private dmr:any=(dmr_info as any).default;
  private lmg:any=(lmg_info as any).default;
  private sniper:any=(sniper_info as any).default;
  private shotgun:any=(shotgun_info as any).default;
  
  //Attachment json files
  private ar_attachments:any=(ar_attach as any).default;

  selected:any;
  getAR(){
    return this.ar;
  }
  getSMG(){
    return this.smg;
  }
  getDMR(){
    return this.dmr;
  }
  getLMG(){
    return this.lmg;
  }
  getSniper(){
    return this.sniper;
  }
  getShotgun(){
    return this.shotgun;
  }
  getArAttachments(){
    return this.ar_attachments;
  }
}
