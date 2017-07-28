package server.count.web;


import  server.count.entity.Server;
import server.count.entity.ServerRepository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.annotation.Resource;

/**
* Created by chen on 2017/7/19.
*/
@RestController
public class ApiController {
  @Resource
  ServerRepository serverRepository;

  @CrossOrigin(origins="*")
  @RequestMapping("/")
  public java.lang.Iterable<server.count.entity.Server> getFc() {
    return serverRepository.findAll();
  }

  @CrossOrigin(origins="*")
  @RequestMapping("{id}")
  public Server getid(@PathVariable Integer id) {
    return serverRepository.findOne(id);
  }

  @CrossOrigin(origins="*")
  @RequestMapping(value="{id}",method=org.springframework.web.bind.annotation.RequestMethod.DELETE)
  public void deleteid(@PathVariable Integer id) {
    serverRepository.delete(id);
  }

  @CrossOrigin(origins="*")
  @RequestMapping(value = "/save", method = RequestMethod.POST)
  public Server saveinfo(Server server ) {
    return serverRepository.save(server);
  }

}
