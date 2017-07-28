package server.count.entity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Created by chen on 2017/7/18.
 */
@Entity
@Table(name = "Server")
public class Server {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @Column
    private String place ;
    @Column
    private String carbinet;
    @Column
    private String slot;
    @Column
    private String  date;
    @Column
    private String serial;
    @Column
    private String cpu;
    @Column
    private String brandr;
    @Column
    private String model;
    @Column
    private String mem;
    @Column
    private String disk;
    @Column
    private String ip;
    @Column
    private String state;
    @Column
    private String login;
    @Column
    private String service;
    @Column
    private String os;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public String getplace() {
        return place;
    }

    public void setplace(String place) {
        this.place = place;
    }

    public String getcarbinet() {
        return carbinet;
    }

    public void setcarbinet(String carbinet) {
        this.carbinet = carbinet;
    }

    public String getslot() {
        return slot;
    }

    public void setslot(String slot) {
        this.slot = slot;
    }
    public String getdate() {
        return date;
    }

    public void setdate(String date) {
        this.date = date;
    }
    public String getserial() {
        return serial;
    }

    public void serial(String serial) {
        this.serial = serial;
    }
    public String getbrandr() {
        return brandr;
    }

    public void setbrandr(String brandr) {
        this.brandr = brandr;
    }
    public String getmodel() {
        return model;
    }

    public void setmodel(String model) {
        this.model = model;
    }
    public String getcpu() {
        return cpu;
    }

    public void setcpu(String cpu) {
        this.cpu = cpu;
    }
    public String getmem() {
        return mem;
    }

    public void setmem(String mem) {
        this.mem = mem;
    }
    public String getdisk() {
        return disk;
    }

    public void setdisk(String disk) {
        this.disk = disk;
    }
    public String getip() {
        return ip;
    }

    public void setip(String ip) {
        this.ip = ip;
    }
    public String getstate() {
        return state;
    }

    public void setstate(String state) {
        this.state = state;
    }
    public String getlogin() {
        return login;
    }

    public void setlogin(String login) {
        this.login = login;
    }
    public String getservice() {
        return service;
    }

    public void getservice(String service) {
        this.service = service;
    } public String getos() {
        return os;
    }

    public void getos(String os) {
        this.os = os;
    }




}
