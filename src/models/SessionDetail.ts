class sessionDetail {
    uid: any;
    img: any;
    sessionHeader: any;
    modeOfSession: any;
    duration: any;
    constructor(uid : any, img: any, sessionHeader: any, modeOfSession: any, duration: any) {
        this.uid = uid,
        this.img = img,
        this.sessionHeader = sessionHeader,
        this.modeOfSession = modeOfSession,
        this.duration = duration
    }
}
export default sessionDetail;