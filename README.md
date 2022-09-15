# Ribbit
distributed terrestrial communications over amateur radio


Hello there. I am W4CKX - Pierre.
I am the inventor of Ribbit, a by Hams, for Hams distributed text messaging network working across Radio links & Cellular with equipment every Ham owns: a simple HT & a smartphone.


# Ribbit, a distributed digital messaging platform with local redundancy
to enhance VHF/UHF communications in regular and emergency situations

## Executive Summary
Ham radio communications on VHF/UHF bands have been dominated by voice communications, which has a low density of information transmitted per spectrum allocated and can be a bottleneck to many conducting regular and emergency communications.
We would like to present Ribbit, a new digital text messaging mode for VHF/UHF simplex and repeater communication, leveraging the computing power, GPS, and touchscreen interface of modern smartphones to enhance the capabilities of a simple Handy Talkie (or mobile transceiver).

Our growth strategy is as follows:
Ribbit's core focus is to radically transform ARES (Amateur Radio Emergency Service) communication capabilities, by allowing weekly NETS to shift to text based communication for check-in and traffic, and support valuable new functionalities like data tables to conduct situational assessments reports.
Once embraced by an ARES group, a local Ham Radio club may elect to deploy a Ribbit server on their repeater. This allows for a local copy of all Ribbit communications to function independently of internet connectivity in times of crisis. The reference design could run on a Raspberry Pi and store  about two years of data.
Finally, Ribbit will support recreational use of the messaging system for common ham radio activities like Simplex Ribbit text messaging, Ribbit for SOTA, POTA, and Ribbit Satellite QSOs, as well as being an online message board for conversations and a knowledge base resource for all hams.

## System Architecture
<img width="549" alt="Ribbit system diagram W4CKX  2022-04-27" src="https://user-images.githubusercontent.com/91791365/166080560-e0bb302a-73ab-4d41-90b7-cc39b840394c.png">

### Sending a message via Ribbit
The operator opens the Ribbit application on his smartphone and keeps the smartphone in proximity of the HT.
The Ribbit application constantly listens for Ribbit messages through the microphone of the smartphone and decodes them for storing and displaying, while no audio is kept.
The operator can compose a message. The application will encode it and send the message as audio through the speaker with the objective to be picked up by the HT VOX activated microphone for transmission.

### Message synchronizations and receipt acknowledgement
The Ribbit app can optionally connect to the Ribbit cloud monitoring application to mark the message as sent. Any other HT or Repeater server receiving the message can also mark the message as received in the cloud application. This allows the operator to see how far the message was transmitted over radio and gives an indication of the expected communication reach.

### Local repeater Ribbit message server & data replication
A local Ribbit server listens for Ribbit messages on the repeater input frequency and initiates every 20 mins a ‘bulk’ broadcast of all messages received in the last 1 hour. On network connectivity, it distributes recorded messages to all other reachable servers.

## Results
To achieve the goal of transmitting data reliably via acoustic coupling between a smartphone and a Handy Talkie, we are facing ISI (Inter-Symbol Interference) caused by the multipath echo from the environment. By using OFDM (Orthogonal Frequency-Division Multiplexing) multi-carrier modulation we have a very efficient way of dealing with multipath at the expense of a lesser than ideal PAPR (Peak-to-Average Power Ratio) compared to single-carrier systems.
By leveraging QPSK (Quadrature Phase-Shift Keying) to modulate the carriers, we are able to slightly manipulate the amplitude of each carrier in order to improve PAPR to the point of making the whole system robust and practical.

Unlike the transmission of voice signals where noise is without consequences, noise in digital signals is usually detrimental and needs to be protected by the use of a FEC (Forward Error Correction) code.
We use a strong BCH (Bose- Chaudhuri-Hocquenghem) code for the callsign header and a systematic polar code for the text payload.

The resulting audio transmission not only survives the path from one smartphone to another with two radios working on AM, FM or SSB in between, but also resist various audio compression methods used in Bluetooth or YouTube.

## Benefits
By leveraging smartphone hardware to work in conjunction with a standard Handy Talkie, we bring the barrier of entry down to zero monetary cost.
By increasing the communication capacity by a factor of 10 compared to voice communications, we plan to grow the user base to all licensed hams.

