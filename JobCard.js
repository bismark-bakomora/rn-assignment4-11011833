// JobCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ job, salaryColor }) => {
  const { title, company, salary, location, logo } = job;

  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.jobDetails}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text style={[styles.salary, { color: salaryColor }]}>{salary}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 280,
    height: 186,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  jobDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'gray', // Adjust the color to make it visible
  },
  location: {
    fontSize: 12,
    color: '#999',
  },
});

export default JobCard;
