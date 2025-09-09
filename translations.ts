export const translations = {
    en: {
        // App.tsx
        priorityRecommendations: 'Priority Recommendations',
        summaryTitle: 'Implementation Summary',
        welcome: 'Welcome to CryptoShield AI',
        loginPrompt: 'Please log in to view your personalized security recommendations.',
        footerText: '© 2024 CryptoShield AI. All rights reserved.',
        elaborateWithAI: 'Elaborate with AI',
        generating: 'Generating...',
        aiError: 'The AI elaboration could not be generated at this time. This may be due to high traffic or a network issue. Please try again in a moment.',


        // Header.tsx
        mainTitle: 'CryptoShield AI',
        mainSubtitle: 'Your AI-powered partner for comprehensive cryptocurrency security.',
        welcomeUser: 'Welcome, {{email}}',
        logout: 'Log Out',
        login: 'Log In',
        signup: 'Sign Up',

        // LoginForm.tsx & SignupForm.tsx
        email: 'Email address',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        noAccount: "Don't have an account?",
        hasAccount: 'Already have an account?',
        continue: 'Continue',
        passwordMismatch: 'Passwords do not match',

        // SummaryTable.tsx
        summaryHeaderPriority: 'Priority',
        summaryHeaderArea: 'Area',
        summaryHeaderRecommendation: 'Recommendation',
        summaryHeaderNextAction: 'Next Action',
        priority: {
            critical: 'Critical',
            high: 'High',
            medium: 'Medium',
            strategic: 'Strategic',
        },

        // TwoFactorSelection.tsx
        twoFactorSelection: {
            title: 'Set Up Two-Factor Authentication',
            subtitle: 'Choose a method to secure your account.',
            authenticatorApp: 'Authenticator App',
            authenticatorAppDesc: 'Use an app like Google Authenticator or Authy.',
            sms: 'SMS Text Message',
            smsDesc: 'Receive a code via text message.',
        },

        // TwoFactorSetup.tsx (App)
        twoFactorSetup: {
            title: 'Set Up Authenticator App',
            subtitle: 'Use your authenticator app to get a verification code.',
            scanButton: 'Scan QR Code with Camera',
            cancelScan: 'Cancel Scan',
            orEnter: 'Your manual setup key:',
            verificationCode: 'Enter Verification Code',
            verify: 'Verify & Complete Setup',
            scanError: 'Could not access camera. Please check permissions and try again.',
            scanSuccess: 'Scan successful! Key imported.',
            noKey: 'Scan a code to view key'
        },

        // TwoFactorSmsInput.tsx
        twoFactorSms: {
            title: 'Set Up SMS Authentication',
            subtitle: 'Enter your phone number to receive a verification code.',
            phoneNumber: 'Phone Number',
            sendCode: 'Send Code',
        },

        // TwoFactorVerify.tsx
        twoFactorVerify: {
            titleLogin: 'Two-Factor Verification',
            titleSignup: 'Verify Your Device',
            enterCodeApp: 'Enter the code from your authenticator app.',
            enterCodeSms: 'Enter the 6-digit code we sent to your phone.',
            verificationCode: 'Verification Code',
            verify: 'Verify',
        },

        // Recommendations Data
        rec: {
            '1': {
                title: 'Algorithm & Protocol Security',
                recommendation: 'Transition from SHA-1 to SHA-256 for all hashing operations to mitigate collision vulnerabilities.',
                actionPlan: [
                    'Audit codebase for all instances of SHA-1.',
                    'Replace SHA-1 with SHA-256 implementation.',
                    'Conduct regression testing to ensure integrity.'
                ]
            },
            '2': {
                title: 'Key Management & Custody',
                recommendation: 'Implement a distributed Multi-Party Computation (MPC) wallet system for critical asset storage.',
                actionPlan: [
                    'Evaluate and select a suitable MPC vendor.',
                    'Integrate MPC SDK for key generation and signing.',
                    'Establish a formal key ceremony and rotation policy.'
                ]
            },
            '3': {
                title: 'Performance & Scalability',
                recommendation: 'Optimize transaction batching logic to reduce network fees and improve throughput.',
                actionPlan: [
                    'Analyze on-chain data to identify optimal batch sizes.',
                    'Refactor transaction submission service.',
                    'Benchmark performance against historical data.'
                ]
            },
            '4': {
                title: 'Smart Contract Security',
                recommendation: 'Integrate a continuous static analysis tool (e.g., Slither) into the CI/CD pipeline.',
                actionPlan: [
                    'Configure CI pipeline to run Slither on every commit.',
                    'Establish a process for triaging and fixing identified vulnerabilities.',
                    'Mandate a clean scan before any mainnet deployment.'
                ]
            },
            '5': {
                title: 'Secure Rollout & Deployment',
                recommendation: 'Adopt a time-locked governance model for all protocol upgrades to allow for community review.',
                actionPlan: [
                    'Deploy a governance contract with a 48-hour time lock.',
                    'Transfer ownership of critical contracts to the governance contract.',
                    'Document the upgrade procedure for stakeholders.',
                    'Communicate changes clearly to the user community.'
                ]
            },
            '6': {
                title: 'Governance & Access Control',
                recommendation: 'Enforce role-based access control (RBAC) for all administrative functions using OpenZeppelin\'s AccessControl.',
                actionPlan: [
                    'Define distinct roles (e.g., ADMIN, PAUSER, UPGRADER).',
                    'Refactor contracts to use `onlyRole` modifiers.',
                    'Assign roles to designated multi-sig wallets.',
                    'Regularly audit role assignments and permissions.'
                ]
            },
            '7': {
                title: 'Data Lifecycle & Privacy',
                recommendation: 'Implement off-chain data storage for user PII using encrypted databases, linking only hashes on-chain.',
                actionPlan: [
                    'Set up a secure, encrypted database instance.',
                    'Develop API endpoints for managing off-chain data.',
                    'Modify dApp to interact with the new data API.',
                    'Ensure compliance with GDPR/CCPA regulations.'
                ]
            },
            '8': {
                title: 'Incident Response & Monitoring',
                recommendation: 'Integrate a real-time monitoring service (e.g., Forta) to detect anomalous on-chain activity.',
                actionPlan: [
                    'Deploy Forta detection bots for critical contracts.',
                    'Configure alert notifications for the security team.',
                    'Develop a playbook for responding to common alerts.',
                    'Conduct regular drills to test response effectiveness.'
                ]
            },
            '9': {
                title: 'Supply Chain Security',
                recommendation: 'Pin all third-party dependencies to specific commit hashes to prevent dependency injection attacks.',
                actionPlan: [
                    'Review and update `package.json` and `yarn.lock` files.',
                    'Use git submodules or direct commit hash URLs.',
                    'Implement automated dependency scanning (e.g., Snyk).',
                    'Establish a policy for vetting and updating dependencies.'
                ]
            },
            '10': {
                title: 'Developer Training & Security',
                recommendation: 'Mandate bi-annual secure development training for all engineering staff, focusing on common blockchain vulnerabilities.',
                actionPlan: [
                    'Select a reputable blockchain security training provider.',
                    'Schedule training sessions for the entire engineering team.',
                    'Track completion and maintain training records.',
                    'Incorporate learnings into internal coding standards.'
                ]
            },
             '11': {
                title: 'AI-Enhanced Evasion Tactics',
                recommendation: 'Utilize a machine learning model to dynamically select communication protocols and ports, creating an unpredictable network footprint.',
                actionPlan: [
                    'Gather baseline network traffic data to identify common and uncommon protocols.',
                    'Train a reinforcement learning model to select hopping sequences that maximize stealth.',
                    'Develop a lightweight agent to execute the hopping strategy dictated by the model.',
                    'Conduct rigorous adversarial testing to validate the effectiveness of the ML-driven evasion.'
                ]
            },
            '12': {
                title: 'Quantum Key Distribution (QKD) Integration',
                recommendation: 'Pilot a QKD network for ultra-secure, point-to-point communication channels for the highest-value transactions.',
                actionPlan: [
                    'Partner with a QKD hardware vendor for a proof-of-concept deployment.',
                    'Identify a critical, low-latency communication path for the pilot.',
                    'Integrate QKD-generated keys into the existing Key Management Service (KMS).',
                    'Benchmark performance and security against classical key exchange methods.'
                ]
            }
        },

        // Summary Data
        summary: {
            '0': {
                area: 'Key Management',
                recommendation: 'Implement MPC for critical asset storage',
                nextAction: 'Evaluate and select a suitable MPC vendor.'
            },
            '1': {
                area: 'Smart Contract',
                recommendation: 'Integrate static analysis into CI/CD',
                nextAction: 'Configure CI pipeline to run Slither on every commit.'
            },
            '2': {
                area: 'Access Control',
                recommendation: 'Enforce RBAC for admin functions',
                nextAction: 'Define distinct roles (ADMIN, PAUSER, etc.).'
            },
            '3': {
                area: 'Incident Response',
                recommendation: 'Integrate real-time on-chain monitoring',
                nextAction: 'Deploy Forta detection bots for critical contracts.'
            },
            '4': {
                area: 'Hashing Algorithm',
                recommendation: 'Migrate from SHA-1 to SHA-256',
                nextAction: 'Audit codebase for all instances of SHA-1.'
            },
            '5': {
                area: 'Deployment',
                recommendation: 'Adopt time-locked governance for upgrades',
                nextAction: 'Deploy a governance contract with a 48-hour time lock.'
            },
            '6': {
                area: 'Supply Chain',
                recommendation: 'Pin third-party dependencies',
                nextAction: 'Review and update `package.json` with specific hashes.'
            },
            '7': {
                area: 'Performance',
                recommendation: 'Optimize transaction batching logic',
                nextAction: 'Analyze on-chain data to find optimal batch sizes.'
            },
            '8': {
                area: 'Data Privacy',
                recommendation: 'Store PII off-chain in encrypted DB',
                nextAction: 'Set up a secure, encrypted database instance.'
            },
            '9': {
                area: 'Security Culture',
                recommendation: 'Mandate bi-annual developer training',
                nextAction: 'Select a reputable blockchain security training provider.'
            },
            '10': {
                area: 'Governance',
                recommendation: 'Establish formal key ceremony and rotation policy',
                nextAction: 'Draft and ratify key management policy document.'
            },
            '11': {
                area: 'Network Evasion',
                recommendation: 'Implement ML-driven protocol hopping',
                nextAction: 'Begin baseline network traffic data collection for model training.'
            },
            '12': {
                area: 'Quantum Networking',
                recommendation: 'Pilot a QKD network for critical communication channels.',
                nextAction: 'Partner with a QKD hardware vendor for a proof-of-concept.'
            }
        }
    },
    es: {
        // App.tsx
        priorityRecommendations: 'Recomendaciones Prioritarias',
        summaryTitle: 'Resumen de Implementación',
        welcome: 'Bienvenido a CryptoShield AI',
        loginPrompt: 'Inicie sesión para ver sus recomendaciones de seguridad personalizadas.',
        footerText: '© 2024 CryptoShield AI. Todos los derechos reservados.',
        elaborateWithAI: 'Elaborar con IA',
        generating: 'Generando...',
        aiError: 'No se pudo generar la elaboración de la IA en este momento. Esto puede deberse a un alto tráfico o un problema de red. Por favor, inténtelo de nuevo en un momento.',

        // Header.tsx
        mainTitle: 'CryptoShield AI',
        mainSubtitle: 'Su socio impulsado por IA para la seguridad integral de las criptomonedas.',
        welcomeUser: 'Bienvenido, {{email}}',
        logout: 'Cerrar Sesión',
        login: 'Iniciar Sesión',
        signup: 'Registrarse',

        // LoginForm.tsx & SignupForm.tsx
        email: 'Dirección de correo electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar Contraseña',
        noAccount: '¿No tienes una cuenta?',
        hasAccount: '¿Ya tienes una cuenta?',
        continue: 'Continuar',
        passwordMismatch: 'Las contraseñas no coinciden',

        // SummaryTable.tsx
        summaryHeaderPriority: 'Prioridad',
        summaryHeaderArea: 'Área',
        summaryHeaderRecommendation: 'Recomendación',
        summaryHeaderNextAction: 'Próxima Acción',
        priority: {
            critical: 'Crítica',
            high: 'Alta',
            medium: 'Media',
            strategic: 'Estratégica',
        },

        // TwoFactorSelection.tsx
        twoFactorSelection: {
            title: 'Configurar Autenticación de Dos Factores',
            subtitle: 'Elija un método para proteger su cuenta.',
            authenticatorApp: 'Aplicación de Autenticación',
            authenticatorAppDesc: 'Use una aplicación como Google Authenticator o Authy.',
            sms: 'Mensaje de Texto SMS',
            smsDesc: 'Reciba un código por mensaje de texto.',
        },

        // TwoFactorSetup.tsx (App)
        twoFactorSetup: {
            title: 'Configurar Aplicación de Autenticación',
            subtitle: 'Utilice su aplicación de autenticación para obtener un código de verificación.',
            scanButton: 'Escanear código QR con la cámara',
            cancelScan: 'Cancelar Escaneo',
            orEnter: 'Su clave de configuración manual:',
            verificationCode: 'Ingrese el Código de Verificación',
            verify: 'Verificar y Completar Configuración',
            scanError: 'No se pudo acceder a la cámara. Verifique los permisos e intente de nuevo.',
            scanSuccess: '¡Escaneo exitoso! Clave importada.',
            noKey: 'Escanee un código para ver la clave'
        },
        
        // TwoFactorSmsInput.tsx
        twoFactorSms: {
            title: 'Configurar Autenticación por SMS',
            subtitle: 'Ingrese su número de teléfono para recibir un código de verificación.',
            phoneNumber: 'Número de Teléfono',
            sendCode: 'Enviar Código',
        },

        // TwoFactorVerify.tsx
        twoFactorVerify: {
            titleLogin: 'Verificación de Dos Factores',
            titleSignup: 'Verifique su Dispositivo',
            enterCodeApp: 'Ingrese el código de su aplicación de autenticación.',
            enterCodeSms: 'Ingrese el código de 6 dígitos que enviamos a su teléfono.',
            verificationCode: 'Código de Verificación',
            verify: 'Verificar',
        },

        rec: {
            '1': { title: 'Seguridad de Algoritmos y Protocolos', recommendation: 'Migrar de SHA-1 a SHA-256.', actionPlan: ['Auditar código', 'Reemplazar SHA-1', 'Probar regresión'] },
            '2': { title: 'Gestión de Claves y Custodia', recommendation: 'Implementar un sistema de billetera MPC.', actionPlan: ['Seleccionar proveedor', 'Integrar SDK', 'Establecer política'] },
            '3': { title: 'Rendimiento y Escalabilidad', recommendation: 'Optimizar el procesamiento por lotes de transacciones.', actionPlan: ['Analizar datos', 'Refactorizar servicio', 'Medir rendimiento'] },
            '4': { title: 'Seguridad de Contratos Inteligentes', recommendation: 'Integrar análisis estático en CI/CD.', actionPlan: ['Configurar CI', 'Establecer proceso', 'Requerir escaneo limpio'] },
            '5': { title: 'Lanzamiento y Despliegue Seguros', recommendation: 'Adoptar un modelo de gobernanza con bloqueo de tiempo.', actionPlan: ['Desplegar contrato', 'Transferir propiedad', 'Documentar procedimiento', 'Comunicar cambios'] },
            '6': { title: 'Gobernanza y Control de Acceso', recommendation: 'Implementar RBAC para funciones administrativas.', actionPlan: ['Definir roles', 'Refactorizar contratos', 'Asignar roles', 'Auditar regularmente'] },
            '7': { title: 'Ciclo de Vida de Datos y Privacidad', recommendation: 'Almacenar PII fuera de la cadena en bases de datos cifradas.', actionPlan: ['Configurar BD segura', 'Desarrollar API', 'Modificar dApp', 'Garantizar cumplimiento'] },
            '8': { title: 'Respuesta a Incidentes y Monitoreo', recommendation: 'Integrar un servicio de monitoreo en tiempo real.', actionPlan: ['Desplegar bots', 'Configurar alertas', 'Desarrollar playbook', 'Realizar simulacros'] },
            '9': { title: 'Seguridad de la Cadena de Suministro', recommendation: 'Fijar todas las dependencias de terceros a hashes específicos.', actionPlan: ['Revisar archivos', 'Usar hashes', 'Implementar escaneo', 'Establecer política'] },
            '10': { title: 'Capacitación de Desarrolladores y Seguridad', recommendation: 'Exigir capacitación bianual en desarrollo seguro.', actionPlan: ['Seleccionar proveedor', 'Programar sesiones', 'Rastrear finalización', 'Incorporar aprendizajes'] },
            '11': { 
                title: 'Tácticas de Evasión Mejoradas con IA',
                recommendation: 'Utilizar un modelo de aprendizaje automático para seleccionar dinámicamente protocolos y puertos de comunicación, creando una huella de red impredecible.',
                actionPlan: [
                    'Recopilar datos de tráfico de red de referencia para identificar protocolos comunes y poco comunes.',
                    'Entrenar un modelo de aprendizaje por refuerzo para seleccionar secuencias de salto que maximicen el sigilo.',
                    'Desarrollar un agente ligero para ejecutar la estrategia de salto dictada por el modelo.',
                    'Realizar pruebas de adversario rigurosas para validar la efectividad de la evasión impulsada por ML.'
                ]
            },
            '12': {
                title: 'Integración de Distribución Cuántica de Claves (QKD)',
                recommendation: 'Pilotar una red QKD para canales de comunicación punto a punto ultraseguros para las transacciones de mayor valor.',
                actionPlan: [
                    'Asociarse con un proveedor de hardware QKD para una implementación de prueba de concepto.',
                    'Identificar una ruta de comunicación crítica y de baja latencia para el piloto.',
                    'Integrar las claves generadas por QKD en el Servicio de Gestión de Claves (KMS) existente.',
                    'Comparar el rendimiento y la seguridad con los métodos clásicos de intercambio de claves criptográficas.'
                ]
            }
        },
        summary: {
            '0': { area: 'Gestión de Claves', recommendation: 'Implementar MPC para almacenamiento de activos críticos', nextAction: 'Evaluar y seleccionar un proveedor de MPC.' },
            '1': { area: 'Contrato Inteligente', recommendation: 'Integrar análisis estático en CI/CD', nextAction: 'Configurar el pipeline de CI para ejecutar Slither.' },
            '2': { area: 'Control de Acceso', recommendation: 'Hacer cumplir RBAC para funciones de administrador', nextAction: 'Definir roles distintos (ADMIN, PAUSER, etc.).' },
            '3': { area: 'Respuesta a Incidentes', recommendation: 'Integrar monitoreo en tiempo real en la cadena', nextAction: 'Desplegar bots de detección de Forta.' },
            '4': { area: 'Algoritmo de Hashing', recommendation: 'Migrar de SHA-1 a SHA-256', nextAction: 'Auditar el código base en busca de instancias de SHA-1.' },
            '5': { area: 'Despliegue', recommendation: 'Adoptar gobernanza con bloqueo de tiempo', nextAction: 'Desplegar un contrato de gobernanza con bloqueo de 48 horas.' },
            '6': { area: 'Cadena de Suministro', recommendation: 'Fijar dependencias de terceros', nextAction: 'Revisar package.json con hashes específicos.' },
            '7': { area: 'Rendimiento', recommendation: 'Optimizar la lógica de lotes de transacciones', nextAction: 'Analizar datos en la cadena para encontrar tamaños de lote óptimos.' },
            '8': { area: 'Privacidad de Datos', recommendation: 'Almacenar PII fuera de la cadena', nextAction: 'Configurar una instancia de base de datos segura y encriptada.' },
            '9': { area: 'Cultura de Seguridad', recommendation: 'Exigir capacitación bianual para desarrolladores', nextAction: 'Seleccionar un proveedor de capacitación en seguridad blockchain.' },
            '10': { area: 'Gobernanza', recommendation: 'Establecer una política formal de ceremonia de claves', nextAction: 'Redactar y ratificar el documento de política de gestión de claves.' },
            '11': {
                area: 'Evasión de Red',
                recommendation: 'Implementar salto de protocolo impulsado por ML',
                nextAction: 'Iniciar la recopilación de datos de tráfico de red de referencia para el entrenamiento del modelo.'
            },
            '12': {
                area: 'Redes Cuánticas',
                recommendation: 'Pilotar una red QKD para canales de comunicación críticos.',
                nextAction: 'Asociarse con un proveedor de hardware QKD para una prueba de concepto.'
            }
        }
    },
    fr: {
        // App.tsx
        priorityRecommendations: 'Recommandations Prioritaires',
        summaryTitle: "Résumé de la Mise en Œuvre",
        welcome: 'Bienvenue sur CryptoShield AI',
        loginPrompt: 'Veuillez vous connecter pour voir vos recommandations de sécurité personnalisées.',
        footerText: '© 2024 CryptoShield AI. Tous droits réservés.',
        elaborateWithAI: 'Élaborer avec l\'IA',
        generating: 'Génération...',
        aiError: 'L\'élaboration par l\'IA n\'a pas pu être générée pour le moment. Cela peut être dû à un trafic élevé ou à un problème de réseau. Veuillez réessayer dans un instant.',


        // Header.tsx
        mainTitle: 'CryptoShield AI',
        mainSubtitle: 'Votre partenaire alimenté par l\'IA pour une sécurité complète des cryptomonnaies.',
        welcomeUser: 'Bienvenue, {{email}}',
        logout: 'Déconnexion',
        login: 'Connexion',
        signup: 'S\'inscrire',

        // LoginForm.tsx & SignupForm.tsx
        email: 'Adresse e-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmez le mot de passe',
        noAccount: "Vous n'avez pas de compte ?",
        hasAccount: 'Vous avez déjà un compte ?',
        continue: 'Continuer',
        passwordMismatch: 'Les mots de passe ne correspondent pas',

        // SummaryTable.tsx
        summaryHeaderPriority: 'Priorité',
        summaryHeaderArea: 'Domaine',
        summaryHeaderRecommendation: 'Recommandation',
        summaryHeaderNextAction: 'Prochaine Action',
        priority: {
            critical: 'Critique',
            high: 'Élevée',
            medium: 'Moyenne',
            strategic: 'Stratégique',
        },

        // TwoFactorSelection.tsx
        twoFactorSelection: {
            title: "Configurer l'Authentification à Deux Facteurs",
            subtitle: 'Choisissez une méthode pour sécuriser votre compte.',
            authenticatorApp: 'Application d\'Authentification',
            authenticatorAppDesc: 'Utilisez une application comme Google Authenticator ou Authy.',
            sms: 'Message Texte SMS',
            smsDesc: 'Recevez un code par message texte.',
        },

        // TwoFactorSetup.tsx (App)
        twoFactorSetup: {
            title: "Configurer l'Application d'Authentification",
            subtitle: 'Utilisez votre application d\'authentification pour obtenir un code de vérification.',
            scanButton: 'Scanner le code QR avec la caméra',
            cancelScan: 'Annuler le scan',
            orEnter: 'Votre clé de configuration manuelle :',
            verificationCode: 'Entrez le Code de Vérification',
            verify: 'Vérifier et Terminer la Configuration',
            scanError: 'Impossible d\'accéder à la caméra. Veuillez vérifier les autorisations et réessayer.',
            scanSuccess: 'Scan réussi ! Clé importée.',
            noKey: 'Scannez un code pour voir la clé'
        },

        // TwoFactorSmsInput.tsx
        twoFactorSms: {
            title: "Configurer l'Authentification par SMS",
            subtitle: 'Entrez votre numéro de téléphone pour recevoir un code de vérification.',
            phoneNumber: 'Numéro de Téléphone',
            sendCode: 'Envoyer le Code',
        },

        // TwoFactorVerify.tsx
        twoFactorVerify: {
            titleLogin: 'Vérification à Deux Facteurs',
            titleSignup: 'Vérifiez Votre Appareil',
            enterCodeApp: 'Entrez le code de votre application d\'authentification.',
            enterCodeSms: 'Entrez le code à 6 chiffres que nous avons envoyé sur votre téléphone.',
            verificationCode: 'Code de Vérification',
            verify: 'Vérifier',
        },
        
        rec: {
            '1': { title: 'Sécurité des Algorithmes et Protocoles', recommendation: 'Passer de SHA-1 à SHA-256.', actionPlan: ['Auditer le code', 'Remplacer SHA-1', 'Tester la régression'] },
            '2': { title: 'Gestion des Clés et Conservation', recommendation: 'Mettre en place un système de portefeuille MPC.', actionPlan: ['Sélectionner un fournisseur', 'Intégrer le SDK', 'Établir une politique'] },
            '3': { title: 'Performance et Évolutivité', recommendation: 'Optimiser le traitement par lots des transactions.', actionPlan: ['Analyser les données', 'Refactoriser le service', 'Mesurer la performance'] },
            '4': { title: 'Sécurité des Contrats Intelligents', recommendation: 'Intégrer l\'analyse statique dans CI/CD.', actionPlan: ['Configurer CI', 'Établir un processus', 'Exiger un scan propre'] },
            '5': { title: 'Déploiement Sécurisé', recommendation: 'Adopter un modèle de gouvernance à verrouillage temporel.', actionPlan: ['Déployer le contrat', 'Transférer la propriété', 'Documenter la procédure', 'Communiquer les changements'] },
            '6': { title: 'Gouvernance et Contrôle d\'Accès', recommendation: 'Appliquer le RBAC pour les fonctions administratives.', actionPlan: ['Définir les rôles', 'Refactoriser les contrats', 'Attribuer les rôles', 'Auditer régulièrement'] },
            '7': { title: 'Cycle de Vie des Données et Confidentialité', recommendation: 'Stocker les PII hors chaîne dans des bases de données chiffrées.', actionPlan: ['Configurer la BD', 'Développer l\'API', 'Modifier la dApp', 'Assurer la conformité'] },
            '8': { title: 'Réponse aux Incidents et Surveillance', recommendation: 'Intégrer un service de surveillance en temps réel.', actionPlan: ['Déployer des bots', 'Configurer les alertes', 'Développer un playbook', 'Effectuer des exercices'] },
            '9': { title: 'Sécurité de la Chaîne d\'Approvisionnement', recommendation: 'Épingler toutes les dépendances tierces à des hachages spécifiques.', actionPlan: ['Examiner les fichiers', 'Utiliser les hachages', 'Mettre en œuvre le scan', 'Établir une politique'] },
            '10': { title: 'Formation des Développeurs et Sécurité', recommendation: 'Imposer une formation semestrielle sur le développement sécurisé.', actionPlan: ['Sélectionner un fournisseur', 'Planifier les sessions', 'Suivre l\'achèvement', 'Incorporer les apprentissages'] },
            '11': {
                title: "Tactiques d'Évasion Améliorées par l'IA",
                recommendation: "Utiliser un modèle d'apprentissage automatique pour sélectionner dynamiquement les protocoles et les ports de communication, créant une empreinte réseau imprévisible.",
                actionPlan: [
                    "Collecter des données de trafic réseau de base pour identifier les protocoles courants et rares.",
                    "Entraîner un modèle d'apprentissage par renforcement pour sélectionner des séquences de sauts qui maximisent la furtivité.",
                    "Développer un agent léger pour exécuter la stratégie de sauts dictée par le modèle.",
                    "Mener des tests adverses rigoureux pour valider l'efficacité de l'évasion pilotée par l'IA."
                ]
            },
            '12': {
                title: 'Intégration de la Distribution Quantique de Clés (QKD)',
                recommendation: 'Piloter un réseau QKD pour des canaux de communication point à point ultra-sécurisés pour les transactions de la plus haute valeur.',
                actionPlan: [
                    'S\'associer à un fournisseur de matériel QKD pour un déploiement de preuve de concept.',
                    'Identifier un chemin de communication critique à faible latence pour le pilote.',
                    'Intégrer les clés générées par QKD dans le service de gestion de clés (KMS) existant.',
                    'Comparer les performances et la sécurité avec les méthodes d\'échange de clés cryptographiques classiques.'
                ]
            }
        },
        summary: {
            '0': { area: 'Gestion des Clés', recommendation: 'Mettre en œuvre MPC pour le stockage des actifs critiques', nextAction: 'Évaluer et sélectionner un fournisseur MPC approprié.' },
            '1': { area: 'Contrat Intelligent', recommendation: 'Intégrer l\'analyse statique dans CI/CD', nextAction: 'Configurer le pipeline CI pour exécuter Slither.' },
            '2': { area: 'Contrôle d\'Accès', recommendation: 'Appliquer le RBAC pour les fonctions d\'administration', nextAction: 'Définir des rôles distincts (ADMIN, PAUSER, etc.).' },
            '3': { area: 'Réponse aux Incidents', recommendation: 'Intégrer la surveillance en temps réel sur la chaîne', nextAction: 'Déployer des bots de détection Forta.' },
            '4': { area: 'Algorithme de Hachage', recommendation: 'Migrer de SHA-1 à SHA-256', nextAction: 'Auditer la base de code pour toutes les instances de SHA-1.' },
            '5': { area: 'Déploiement', recommendation: 'Adopter une gouvernance à verrouillage temporel', nextAction: 'Déployer un contrat de gouvernance avec un verrouillage de 48 heures.' },
            '6': { area: 'Chaîne d\'Approvisionnement', recommendation: 'Épingler les dépendances tierces', nextAction: 'Examiner package.json avec des hachages spécifiques.' },
            '7': { area: 'Performance', recommendation: 'Optimiser la logique de traitement par lots', nextAction: 'Analyser les données sur la chaîne pour trouver des tailles de lots optimales.' },
            '8': { area: 'Confidentialité des Données', recommendation: 'Stocker les PII hors chaîne', nextAction: 'Configurer une instance de base de données sécurisée et chiffrée.' },
            '9': { area: 'Culture de la Sécurité', recommendation: 'Imposer une formation semestrielle aux développeurs', nextAction: 'Sélectionner un fournisseur de formation en sécurité blockchain réputé.' },
            '10': { area: 'Gouvernance', recommendation: 'Établir une politique formelle de cérémonie des clés', nextAction: 'Rédiger et ratifier le document de politique de gestion des clés.' },
            '11': {
                area: 'Évasion Réseau',
                recommendation: "Mettre en œuvre le saut de protocole piloté par l'IA",
                nextAction: "Commencer la collecte de données de trafic réseau de base pour l'entraînement du modèle."
            },
            '12': {
                area: 'Réseautage Quantique',
                recommendation: 'Piloter un réseau QKD pour les canaux de communication critiques.',
                nextAction: 'S\'associer à un fournisseur de matériel QKD pour une preuve de concept.'
            }
        }
    }
};