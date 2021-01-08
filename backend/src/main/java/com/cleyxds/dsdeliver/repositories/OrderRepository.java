package com.cleyxds.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cleyxds.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
